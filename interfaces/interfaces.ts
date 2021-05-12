// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface TickersPriceProps {
  ticker: string
  changes: number
  price: string
  changesPercentage: string
  companyName: string
}
export interface SectorPerformancePriceProps {
  sector: string
  changesPercentage: string
}

export interface StockPricesProps {
  symbol: string
  name: string
  price: number
  changesPercentage: number
  change: number
  dayLow: number
  dayHigh: number
  yearHigh: number
  yearLow: number
  marketCap: number
  priceAvg50: number
  priceAvg200: number
  volume: number
  avgVolume: number
  exchange: string
  open: number
  previousClose: number
  eps: number
  pe: number
  earningsAnnouncement: string
  sharesOutstanding: number
  timestamp: number
}

export interface NewsData {
  symbol: string
  publishedDate: string
  title: string
  image: string
  site: string
  text: string
  url: string
}

export interface PriceHistoryProps {
  chartData: {
    symbol: string
    historical: SinglePrice[]
  }
}

export interface SinglePrice {
  date: string
  open: number
  high: number
  low: number
  close: number
  adjClose: number
  volume: number
  unadjustedVolume: number
  change: number
  changePercent: number
  vwap: number
  label: string
  changeOverTime: number
}
