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