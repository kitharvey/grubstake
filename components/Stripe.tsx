import React from "react"
import { TickersPriceProps } from "../interfaces/interfaces"

interface StripeProps {
  mostSearchedStocks: TickersPriceProps[]
}

const Stripe: React.FC<StripeProps> = ({ mostSearchedStocks }) => {
  return (
    <div className="animate-ticker flex font-thin text-xs">
      {mostSearchedStocks.map((mostSearchedStock: TickersPriceProps) => {
        return (
          <p className="px-5 whitespace-nowrap inline-block" key={mostSearchedStock.ticker}>
            <span>{mostSearchedStock.ticker}&nbsp;</span>
            <span>{(+mostSearchedStock.price).toLocaleString()}&nbsp;</span>
            <span className={mostSearchedStock.changes > 0 ? "text-green-500" : "text-red-500"}>
              {(+mostSearchedStock.changes).toLocaleString()}&nbsp;
            </span>
            <span className={mostSearchedStock.changes > 0 ? "text-green-500" : "text-red-500"}>
              {mostSearchedStock.changesPercentage}
            </span>
          </p>
        )
      })}
    </div>
  )
}

export default Stripe
