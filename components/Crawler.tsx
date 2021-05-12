import React from "react"
import { TickersPriceProps } from "../interfaces/interfaces"
import Stripe from "./Stripe"

interface CrawlerProps {
  actives: TickersPriceProps[]
}

const Crawler: React.FC<CrawlerProps> = ({ actives }) => {
  return (
    <div className="w-full overflow-hidden shadow-lg border-b border-t border-gray-100 border-solid py-2 bg-white">
      <div className="w-max flex items-center">
        <Stripe mostSearchedStocks={actives} />
        <Stripe mostSearchedStocks={actives} />
        <Stripe mostSearchedStocks={actives} />
      </div>
    </div>
  )
}

export default Crawler
