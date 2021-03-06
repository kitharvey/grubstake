import React from 'react'
import { StockPricesProps } from '../interfaces/interfaces'

interface StripeProps{
    mostSearchedStocks: StockPricesProps[]
}

const Stripe: React.FC<StripeProps> = ({mostSearchedStocks}) => {
    return (
        <div className='animate-ticker flex font-thin text-xs' >
            {mostSearchedStocks.map((mostSearchedStock: StockPricesProps) => {
                return (
                    <p className='px-5 whitespace-nowrap inline-block' key={mostSearchedStock.symbol} >
                    <span>{mostSearchedStock.symbol}&nbsp;</span>
                    <span>{(+mostSearchedStock.price).toLocaleString()}&nbsp;</span>
                    <span className={mostSearchedStock.change > 0 ? 'text-green-500' : 'text-red-500'} >{(+mostSearchedStock.change).toLocaleString()}&nbsp;</span>
                    <span className={mostSearchedStock.change > 0 ? 'text-green-500' : 'text-red-500'} >({mostSearchedStock.changesPercentage}%)</span>
                </p>
                )
            })}
 
      </div>
    )
  }


export default Stripe