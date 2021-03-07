import {Buyer, Specimen, WinnerBuyer} from "../utils/entities";
import { SealedBidAuctionAlgorithm } from "../sealed-bid-auction.algorithm";
import { messageError } from "../utils/constants";

describe('SealedBidAuctionAlgorithm', () => {
  it('Fail: An object is for sale with a reserve price.', () => {
    const specimen: Specimen = { name: 'Renault 5, model 2011' } as Specimen;
    expect(() => {
      SealedBidAuctionAlgorithm.solve(specimen);
    }).toThrow(messageError.NameAndReservedPriceRequired)
  });

  it('Fail: An object is for sale with a reserve name', () => {
    const specimen: Specimen = { reservePrice: 100 } as Specimen;
    expect(() => {
      SealedBidAuctionAlgorithm.solve(specimen);
    }).toThrow(messageError.NameAndReservedPriceRequired)
  });

  it('Fail: An object is for sale with no buyers', () => {
    const specimen: Specimen = { name: 'Renault 5, model 2011', reservePrice: 100 } as Specimen;
    expect(() => {
      SealedBidAuctionAlgorithm.solve(specimen);
    }).toThrow(messageError.BuyerNotEmpty)
  });

  it('Fail: An object is for sale with no buyers', () => {
    const specimen: Specimen = { name: 'Renault 5, model 2011', reservePrice: 100, buyers: [] } as Specimen;
    expect(() => {
      SealedBidAuctionAlgorithm.solve(specimen);
    }).toThrow(messageError.BuyerNotEmpty)
  });

  it('Winner', () => {
    const buyers: Buyer[] = [
      { name: 'A', bids: [110, 130] },
      { name: 'B', bids: [] },
      { name: 'C', bids: [125] },
      { name: 'D', bids: [105, 115, 90] },
      { name: 'E', bids: [132, 135, 140] },
    ];
    const specimen: Specimen = { name: 'Renault 5, model 2011', reservePrice: 100, buyers } as Specimen;
    const result: WinnerBuyer = SealedBidAuctionAlgorithm.solve(specimen);
    expect(result.name).toBe("E");
    expect(result.bids).toStrictEqual([132, 135, 140]);
    expect(result.winningPrice).toBe(130);
  });


  it('Fail: Two Winners', () => {
    const buyers: Buyer[] = [
      { name: 'A', bids: [110, 130] },
      { name: 'B', bids: [] },
      { name: 'C', bids: [125] },
      { name: 'D', bids: [105, 115, 140] },
      { name: 'E', bids: [132, 135, 140] },
    ];
    const specimen: Specimen = { name: 'Renault 5, model 2011', reservePrice: 100, buyers } as Specimen;
    expect(() => {
      SealedBidAuctionAlgorithm.solve(specimen);
    }).toThrow(messageError.TwoWinners)
  });
});
