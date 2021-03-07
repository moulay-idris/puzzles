import { Specimen } from "../utils/entities";
import { SealedBidAuctionAlgorithm } from "../sealed-bid-auction.algorithm";

describe('SealedBidAuctionAlgorithm', () => {
  it('Fail: An object is for sale with a reserve price.', () => {
    const specimen: Specimen = { name: 'Renault 5, model 2011' } as Specimen;
    const result = SealedBidAuctionAlgorithm.solve(specimen);
    expect(result).toBe(undefined)
  });

  it('Fail: An object is for sale with a reserve name', () => {
    const specimen: Specimen = { reservePrice: 100 } as Specimen;
    const result = SealedBidAuctionAlgorithm.solve(specimen);
    expect(result).toBe(undefined)
  });

  it('Fail: An object is for sale with no buyers', () => {
    const specimen: Specimen = { name: 'Renault 5, model 2011', reservePrice: 100 } as Specimen;
    const result = SealedBidAuctionAlgorithm.solve(specimen);
    expect(result).toBe(undefined)
  });

  it('Fail: An object is for sale with no buyers', () => {
    const specimen: Specimen = { name: 'Renault 5, model 2011', reservePrice: 100, buyers: [] } as Specimen;
    const result = SealedBidAuctionAlgorithm.solve(specimen);
    expect(result).toBe(undefined)
  });

});
