import { redirect } from "next/navigation";

import { CardPresentation } from "./_components/card-presentation";

import { getCardBySlug } from "@/actions/card/get-card-by-slug";

const SlugPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ a: string }>;
}): Promise<React.ReactNode> => {
  const { slug } = await params;
  const { a } = await searchParams;

  const showChooseAnotherCardButton = a !== "1";

  const { data } = await getCardBySlug({
    slug,
  });

  if (!data) {
    return redirect(`/${slug}/escolher-carta`);
  }

  return (
    <CardPresentation
      card={data.card}
      showChooseAnotherCardButton={showChooseAnotherCardButton}
      slug={slug}
      suit={data.suit}
    />
  );
};

export default SlugPage;
