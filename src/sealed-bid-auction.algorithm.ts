import _ from 'lodash';
import { NoWinner, Specimen, WinnerBuyer } from "./utils/entities";

export class SealedBidAuctionAlgorithm {
  static solve(specimen: Specimen): WinnerBuyer | NoWinner {
    const { buyers, name, reservePrice } = specimen;

    if (!name || !reservePrice) return undefined;

    if (!_.isArray(buyers) || (_.size(buyers) === 0)) return undefined;



    return {} as WinnerBuyer;
  }
}
