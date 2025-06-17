import { redirect } from "next/navigation";

import { CardPresentation } from "./_components/card-presentation";

import { getCardBySlug } from "@/actions/card/get-card-by-slug";

const SlugPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactNode> => {
  const { slug } = await params;

  const { data } = await getCardBySlug({
    slug,
  });

  if (!data) {
    return redirect(`/${slug}/escolher-carta`);
  }

  return <CardPresentation card={data.card} slug={slug} suit={data.suit} />;
};

export default SlugPage;
