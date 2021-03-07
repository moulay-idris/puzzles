export interface Buyer {
  name: string;
  bids: number[];
}

export interface WinnerBuyer extends Buyer {
  winningPrice: number;
}

export interface Specimen {
  name?: string;
  reservePrice?: number;
  buyers?: Buyer[];
}

export type NoWinner = typeof undefined;

