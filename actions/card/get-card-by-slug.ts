"use server";

import { z } from "zod";

import { safeActionClient } from "../safe-action-client";

import { binId, jsonBinService } from "@/services/http/jsonbin-service";
import { CardsEnum } from "@/types/cards/cards-enum";
import { SuitsEnum } from "@/types/cards/suits-enum";

const getCardBySlugSchema = z.object({
  slug: z.string().min(1),
});

export const getCardBySlug = safeActionClient
  .inputSchema(getCardBySlugSchema)
  .action(async ({ parsedInput }) => {
    const { slug } = parsedInput;

    try {
      const { data } = await jsonBinService.get<
        Record<string, { card: CardsEnum; suit: SuitsEnum }>
      >(`/b/${binId}`, {
        params: { meta: false },
      });

      return data?.[slug] ?? null;
    } catch (error) {
      console.error(
        `[getCardBySlug] Error getting card by slug: ${slug}`,
        error,
      );

      return null;
    }
  });
