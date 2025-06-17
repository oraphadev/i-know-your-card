"use server";

import { z } from "zod";

import { safeActionClient } from "../safe-action-client";

import { jsonBinService, binId } from "@/services/http/jsonbin-service";
import { SuitsEnum } from "@/types/cards/suits-enum";
import { CardsEnum } from "@/types/cards/cards-enum";

const getCardBySlugSchema = z.object({
  slug: z.string().min(1),
});

export const getCardBySlug = safeActionClient
  .inputSchema(getCardBySlugSchema)
  .action(async ({ parsedInput }) => {
    const { slug } = parsedInput;

    const { data } = await jsonBinService.get<
      Record<string, { card: CardsEnum; suit: SuitsEnum }>
    >(`/b/${binId}`, {
      params: { meta: false },
    });

    return data?.[slug] ?? null;
  });
