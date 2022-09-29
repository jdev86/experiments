export type Stat = {
  total: number,
  totalCoins: number,
  totalMarkets: number,
  totalExchanges: number,
  totalMarketCap: string,
  total24hVolume: string
}

export type Coin = {
  uuid: string,
  symbol: string,
  name: string,
  color: string
  iconUrl: string,
  marketCap: string,
  price: string,
  btcPrice: string,
  listedAt: Date,
  change: string,
  rank: number,
  sparkline: unknown[],
  coinrankingUrl: string,
  "24hVolume": string,
}

export type Params = {
  timePeriod: string,
  tiers: string,
  orderBy: string,
  orderDirection: string,
  limit: string,
  offset: string
}
