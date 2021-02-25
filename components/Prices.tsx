import { FaAngleRight } from 'react-icons/fa';
import React from 'react'
// import majorIndexes from '../data/major';
import { StockPricesProps } from '../interfaces';
import { useRouter } from 'next/router'

interface PricesComponentProps{
    title: string,
    link: string,
    priceData: StockPricesProps[]
}

const Prices: React.FC<PricesComponentProps> = ({title, priceData, link}) => {
    const items = priceData.slice(0, 5)
    const router = useRouter()
        return (
            <div>
                <div className='group flex items-center justify-between cursor-pointer hover:text-blue-800' onClick={() => router.push({
                                    pathname: `/${link}`
                                  })}>
                    <h1 className='text-lg font-black' >{title}</h1>
                    <FaAngleRight />
                </div>
                <div>
                    {items.map( (item: StockPricesProps) => {
                        return (
                            <div 
                                key={item.symbol}
                                className='grid grid-cols-3 text-sm py-4 px-2 bg-white mt-2 rounded-md cursor-pointer transform transition-all hover:-translate-y-0.5 shadow hover:shadow-lg hover:text-blue-800' 
                                onClick={() => router.push({
                                    pathname: `/financial-summary/${item.symbol}`,
                                  })}
                            >
                                <div className='text-left' >
                                    <span>{item.symbol}</span>
                                </div>
                                <div className={ 'text-center'} >
                                    <span className={item.change > 0 ? 'text-green-500 bg-green-100 px-2 py-1 rounded-full' : 'text-red-500 bg-red-100 px-2 py-1 rounded-full'} >
                                        {item.changesPercentage}%
                                    </span>
                                </div>
                                {item.price && <div className='text-right' >
                                    <span>{item.price.toLocaleString()}</span>
                                </div>}
                            </div>
                        )
                    } )}
                </div>
            </div>
        );
}


export default Prices