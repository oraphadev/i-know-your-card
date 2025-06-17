export enum SuitsEnum {
  clubs = "♣️",
  hearts = "♥️",
  spades = "♠️",
  diamonds = "♦️",
}

export const validSuitOptions = Object.values(SuitsEnum) as [
  SuitsEnum,
  ...SuitsEnum[],
];
