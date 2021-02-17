// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export interface ActiveStock{
  ticker : string
  changes : number
  price : string
  changesPercentage : string
  companyName : string
}

export interface NewsData{
  symbol : string
  publishedDate : string
  title : string
  image : string
  site : string
  text : string
  url : string
}
export interface PriceProps{
  'symbol' : string,
  'name' : string,
  'price' : number,
  'changesPercentage' : number,
  'change' : number,
  'dayLow' ?: number | null,
  'dayHigh' ?: number | null,
  'yearHigh' ?: number | null,
  'yearLow' ?: number | null,
  'marketCap' ?: number | null,
  'priceAvg50' ?: number | null,
  'priceAvg200' ?: number | null,
  'volume' ?: number | null,
  'avgVolume' ?: number | null,
  'exchange' ?: string,
  'open' ?: number | null,
  'previousClose' : number,
  'eps' ?: number| null,
  'pe' ?: number | null,
  'earningsAnnouncement' ?: number | null,
  'sharesOutstanding' ?: number | null,
  'timestamp' : number
}