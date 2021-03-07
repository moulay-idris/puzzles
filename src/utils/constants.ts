export const messageError : { [key: string]: string } = {
  NameAndReservedPriceRequired: 'name && reservePrice is required',
  BuyerNotEmpty: 'buyers should be array and not empty',
  BidsInfToReservedPrice: 'all bid are inf to the reservedPrice',
  TwoWinners: 'two buyer or more has the same winning bid',
}
