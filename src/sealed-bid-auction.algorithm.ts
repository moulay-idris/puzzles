import _ from 'lodash';
import {Buyer, Specimen, WinnerBuyer} from "./utils/entities";
import { messageError } from "./utils/constants";


export class SealedBidAuctionAlgorithm {
  static solve(specimen: Specimen): WinnerBuyer {
    const { buyers, name, reservePrice } = specimen;

    if (!name || !_.isNumber(reservePrice)) throw new Error(messageError.NameAndReservedPriceRequired);

    if (!_.isArray(buyers) || _.isEmpty(buyers)) throw new Error(messageError.BuyerNotEmpty);

    const authorizedBuyers: Buyer[] = _.filter(buyers, (buyer: Buyer) => {
      const bids = _.get(buyer, 'bids', []);
      if (!_.isArray(bids) || _.isEmpty(bids)) return false;

      const bidWhichGonnaWin = _.filter(bids, bid => bid >= reservePrice);
      return !_.isEmpty(bidWhichGonnaWin);
    });

    if (_.isEmpty(authorizedBuyers)) throw new Error(messageError.BidsInfToReservedPrice);

    const authorizedBuyersWithPlayingBid = _.map(
      authorizedBuyers,
      ({ bids, name }) => ({ name, bid: Math.max(...bids), bids })
    ).sort((prevBuyer, nextbuyer) => nextbuyer.bid - prevBuyer.bid);

    const winner = _.get(authorizedBuyersWithPlayingBid, '0');


    const firstPrice = _.get(winner, 'bid');
    const secondPrice = _.get(authorizedBuyersWithPlayingBid, '1.bid', undefined);
    if (firstPrice === secondPrice) throw new Error(messageError.TwoWinners);

    return {
      bids: winner.bids,
      name: winner.name,
      winningPrice: _.get(authorizedBuyersWithPlayingBid, '1.bid', reservePrice)
    } as WinnerBuyer;
  }
}
