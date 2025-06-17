import { CardForm } from "./_components/form";

const CardPage = async ({
  params,
}: {
  params: Promise<{ slug: string; card: string }>;
}): Promise<React.ReactNode> => {
  const { slug, card } = await params;

  return <CardForm defaultCard={card} slug={slug} />;
};

export default CardPage;
