"use server";

import { z } from "zod";

import { safeActionClient } from "../safe-action-client";

import { jsonBinService, binId } from "@/services/http/jsonbin-service";
import { SuitsEnum } from "@/types/cards/suits-enum";
import { CardsEnum } from "@/types/cards/cards-enum";

const setSlugCardSchema = z.object({
  slug: z.string().min(1),
  card: z.enum(Object.values(CardsEnum) as [CardsEnum, ...CardsEnum[]]),
  suit: z.enum(Object.values(SuitsEnum) as [SuitsEnum, ...SuitsEnum[]]),
});

export const setSlugCard = safeActionClient
  .inputSchema(setSlugCardSchema)
  .action(async ({ parsedInput }) => {
    const { slug, card, suit } = parsedInput;

    const { data } = await jsonBinService.get(`/b/${binId}`, {
      params: { meta: false },
    });

    data[slug] = {
      card,
      suit,
    };

    await jsonBinService.put(`/b/${binId}`, data);

    return {
      success: true,
      message: "CARD_SET_SUCCESS",
    };
  });
