"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import Link from "next/link";
import { useEffect } from "react";
import confetti from "canvas-confetti";

import { CardsEnum } from "@/types/cards/cards-enum";
import { SuitsEnum } from "@/types/cards/suits-enum";

type CardPresentationProps = {
  card: CardsEnum;
  suit: SuitsEnum;
  slug: string;
  showChooseAnotherCardButton?: boolean;
};

export const CardPresentation = ({
  card,
  suit,
  slug,
  showChooseAnotherCardButton = false,
}: CardPresentationProps): React.ReactNode => {
  useEffect(() => {
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 6_500);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Eu sei...
      </motion.h1>
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 1.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        qual é...
      </motion.h2>
      <motion.h3
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 3 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        sua carta...
      </motion.h3>
      <motion.h4
        className="text-4xl font-bold text-primary"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 4.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {slug.charAt(0).toUpperCase() + slug.slice(1)}
      </motion.h4>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-0 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 6 }}
      >
        <div className="w-full max-w-md bg-white rounded-t-3xl pt-6 px-6 pb-12">
          <div className="flex items-center justify-between gap-2">
            <span className="text-4xl text-black font-bold">
              {card}
              {suit}
            </span>
            {showChooseAnotherCardButton && (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 10 }}
              >
                <Link href={`/${slug}/escolher-carta`}>
                  <Button color="primary" variant="flat">
                    Escolher outra carta
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
