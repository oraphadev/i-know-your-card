"use client";

import Link from "next/link";
import QrCode from "react-qr-code";

type SuccessFormStepProps = {
  slug: string;
};

export const SuccessFormStep = ({
  slug,
}: SuccessFormStepProps): React.ReactNode => {
  const link = `${window.location.origin}/${slug}?a=1`;

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-6 text-center">
      <QrCode value={link} />
      <Link
        className="text-sm text-primary underline"
        href={`/${slug}?a=1`}
        title="Visualizar carta escolhida"
      >
        {link}
      </Link>
    </div>
  );
};
