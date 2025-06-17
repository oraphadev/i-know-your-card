"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";

import { SuitsEnum } from "@/types/cards/suits-enum";

type SuitFormStepProps = {
  slug: string;
  suit: SuitsEnum | null;
  setSuit: (suit: SuitsEnum) => void;
  onNext: () => Promise<void> | void;
  validSuitOptions: SuitsEnum[];
  isLoading?: boolean;
};

export const SuitFormStep = ({
  slug,
  suit,
  setSuit,
  onNext,
  validSuitOptions,
  isLoading = false,
}: SuitFormStepProps): React.ReactNode => {
  return (
    <div className="flex flex-col gap-8 p-6">
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Escolha o naipe da carta de {slug}
      </motion.h1>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {validSuitOptions.map((option, index) => (
          <motion.li
            key={option}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Button
              className="w-full"
              color={suit === option ? "primary" : "default"}
              variant={suit === option ? "solid" : "bordered"}
              onPress={() => setSuit(option)}
            >
              {option}
            </Button>
          </motion.li>
        ))}
      </ul>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.75, delay: 0.85 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Button
          className="w-full"
          color="primary"
          isDisabled={!suit}
          isLoading={isLoading}
          onPress={onNext}
        >
          Continuar
        </Button>
      </motion.div>
    </div>
  );
};
