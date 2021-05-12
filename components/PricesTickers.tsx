import { FaAngleRight } from "react-icons/fa"
import React from "react"
import Link from "next/link"
import { TickersPriceProps } from "../interfaces/interfaces"

interface PricesComponentProps {
  title: string
  link: string
  priceData: TickersPriceProps[]
}

const PricesTickers: React.FC<PricesComponentProps> = ({ title, priceData, link }) => {
  const items = priceData.slice(0, 5)
  return (
    <div>
      <Link href={`/${link}`}>
        <div className="group flex items-center justify-between cursor-pointer hover:text-blue-800">
          <h1 className="text-lg font-black">{title}</h1>
          <FaAngleRight />
        </div>
      </Link>
      <div>
        {items.map((item: TickersPriceProps) => {
          const changerate = item.changesPercentage.replace(/[()%]/g, "")
          return (
            <Link href={`/financial-summary/${item.ticker}`}>
              <div
                key={item.ticker}
                className="grid grid-cols-3 text-sm py-4 px-2 bg-white mt-2 rounded-md cursor-pointer transform transition-all hover:-translate-y-0.5 shadow hover:shadow-lg hover:text-blue-800"
              >
                <div className="text-left">
                  <span>{item.ticker}</span>
                </div>
                <div className="text-center">
                  <span
                    className={
                      item.changes > 0
                        ? "text-green-500 bg-green-100 px-2 py-1 rounded-full"
                        : "text-red-500 bg-red-100 px-2 py-1 rounded-full"
                    }
                  >
                    {+changerate}%
                  </span>
                </div>
                <div className="text-right">
                  <span>{item.price.toLocaleString()}</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default PricesTickers
