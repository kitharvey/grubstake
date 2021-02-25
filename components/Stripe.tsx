import React from 'react'
import { StockPricesProps } from '../interfaces'

interface StripeProps{
    mostSearchedStocks: StockPricesProps[]
}

const Stripe: React.FC<StripeProps> = ({mostSearchedStocks}) => {
    return (
        <div className='animate-ticker flex font-thin text-xs' >
            {mostSearchedStocks.map((mostActiveStock: StockPricesProps) => {
                return (
                    <p className='px-5 whitespace-nowrap inline-block' key={mostActiveStock.symbol} >
                    <span>{mostActiveStock.symbol}&nbsp;</span>
                    <span>{(+mostActiveStock.price).toLocaleString()}&nbsp;</span>
                    <span className={mostActiveStock.change > 0 ? 'text-green-500' : 'text-red-500'} >{(+mostActiveStock.change).toLocaleString()}&nbsp;</span>
                    <span className={mostActiveStock.change > 0 ? 'text-green-500' : 'text-red-500'} >({mostActiveStock.changesPercentage}%)</span>
                </p>
                )
            })}
 
      </div>
    )
  }


export default Stripe