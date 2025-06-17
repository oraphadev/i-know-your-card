export enum CardsEnum {
  ace = "A",
  two = "2",
  three = "3",
  four = "4",
  five = "5",
  six = "6",
  seven = "7",
  eight = "8",
  nine = "9",
  ten = "10",
  jack = "J",
  queen = "Q",
  king = "K",
}

export const validCardOptions = Object.values(CardsEnum) as [
  CardsEnum,
  ...CardsEnum[],
];
