"use client";

import { useMemo, useState } from "react";
import { cn } from "@heroui/theme";
import confetti from "canvas-confetti";

import { CardFormStep } from "./steps/card";
import { SuitFormStep } from "./steps/suit";
import { SuccessFormStep } from "./steps/success";

import { SuitsEnum, validSuitOptions } from "@/types/cards/suits-enum";
import { CardsEnum, validCardOptions } from "@/types/cards/cards-enum";
import { setSlugCard } from "@/actions/card/set-slug-card";

type CardFormProps = React.ComponentProps<"div"> & {
  defaultCard: string;
  slug: string;
};

export const CardForm = ({
  defaultCard,
  slug,
  className,
  ...props
}: CardFormProps): React.ReactNode => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [card, setCard] = useState<CardsEnum | null>(
    validCardOptions.includes(defaultCard.toUpperCase() as CardsEnum)
      ? (defaultCard.toUpperCase() as CardsEnum)
      : null,
  );
  const [suit, setSuit] = useState<SuitsEnum | null>(null);

  const handleNext = () => {
    setCurrentStepIndex((prev) => prev + 1);
  };

  const handleFinish = async () => {
    if (card && suit) {
      try {
        setIsLoading(true);
        await setSlugCard({ slug, card, suit });
        setCurrentStepIndex((prev) => prev + 1);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.7 },
        });
      } catch {
        setCurrentStepIndex(0);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const steps = useMemo(
    () => [
      <CardFormStep
        key="card"
        card={card}
        setCard={setCard}
        slug={slug}
        validCardOptions={validCardOptions}
        onNext={handleNext}
      />,
      <SuitFormStep
        key="suit"
        isLoading={isLoading}
        setSuit={setSuit}
        slug={slug}
        suit={suit}
        validSuitOptions={validSuitOptions}
        onNext={handleFinish}
      />,
      <SuccessFormStep key="success" slug={slug} />,
    ],
    [card, suit],
  );

  return (
    <div
      className={cn("flex flex-col gap-4 w-full max-w-xl", className)}
      {...props}
    >
      {steps[currentStepIndex]}
    </div>
  );
};
