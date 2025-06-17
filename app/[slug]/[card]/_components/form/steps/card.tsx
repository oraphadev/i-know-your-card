"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";

import { CardsEnum } from "@/types/cards/cards-enum";

type CardFormStepProps = {
  slug: string;
  card: CardsEnum | null;
  setCard: (card: CardsEnum) => void;
  onNext: () => void;
  validCardOptions: CardsEnum[];
};

export const CardFormStep = ({
  slug,
  card,
  setCard,
  onNext,
  validCardOptions,
}: CardFormStepProps): React.ReactNode => {
  return (
    <div className="flex flex-col gap-8 p-6">
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Escolha a carta de {slug}
      </motion.h1>

      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {validCardOptions.map((option, index) => (
          <motion.li
            key={option}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Button
              className="w-full"
              color={card === option ? "primary" : "default"}
              variant={card === option ? "solid" : "bordered"}
              onPress={() => setCard(option)}
            >
              {option}
            </Button>
          </motion.li>
        ))}
      </ul>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.75, delay: 1.85 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Button
          className="w-full"
          color="primary"
          isDisabled={!card}
          onPress={onNext}
        >
          Continuar
        </Button>
      </motion.div>
    </div>
  );
};
