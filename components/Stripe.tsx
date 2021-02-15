import React from 'react'
import { ActiveStock } from '../interfaces'
import mostActiveStocks from '../data/active'

const Stripe: React.FC = () => {
    return (
        <div className='animate-ticker flex font-thin text-sm' >
            {mostActiveStocks.map((mostActiveStock: ActiveStock) => {
                return (
                    <p className='px-5 whitespace-nowrap inline-block' key={mostActiveStock.ticker} >
                    <span>{mostActiveStock.ticker}&nbsp;</span>
                    <span>{(+mostActiveStock.price).toLocaleString()}&nbsp;</span>
                    <span className={mostActiveStock.changes > 0 ? 'text-green-500' : 'text-red-500'} >{(+mostActiveStock.changes).toLocaleString()}&nbsp;</span>
                    <span className={mostActiveStock.changes > 0 ? 'text-green-500' : 'text-red-500'} >{mostActiveStock.changesPercentage}</span>
                </p>
                )
            })}
 
      </div>
    )
  }


export default Stripe