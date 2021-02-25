import { FaAngleRight } from 'react-icons/fa';
import React from 'react'
// import majorIndexes from '../data/major';
import { SectorPerformancePriceProps } from '../interfaces';
import { useRouter } from 'next/router'

interface PricesComponentProps{
    title: string,
    priceData: SectorPerformancePriceProps[]
}

const PriceSectorPerformance: React.FC<PricesComponentProps> = ({title, priceData}) => {
    const items = priceData.slice(0, 5)
    const router = useRouter()
        return (
            <div>
                <div className='group flex items-center justify-between cursor-pointer hover:text-blue-800' onClick={() => router.push({
                                    pathname: `${title}`
                                  })}>
                    <h1 className='text-lg font-black' >{title}</h1>
                    <FaAngleRight />
                </div>
                <div>
                    {items.map( (item: SectorPerformancePriceProps) => {
                        const change = item.changesPercentage.replace(/[%]/g, '')
                        return (
                            <div 
                                key={item.sector}
                                className='flex items-center justify-between text-sm py-4 px-2 bg-white mt-2 rounded-md cursor-pointer transform transition-all hover:-translate-y-0.5 shadow hover:shadow-lg hover:text-blue-800' 
                                onClick={() => router.push({
                                    pathname: `/${title}/${item.sector}`,
                                  })}
                            >
                                <div className='text-left' >
                                    <span>{item.sector}</span>
                                </div>
                                <div className={ 'text-center'} >
                                    <span className={+change > 0 ? 'text-green-500 bg-green-100 px-2 py-1 rounded-full' : 'text-red-500 bg-red-100 px-2 py-1 rounded-full'} >
                                        {+change}%
                                    </span>
                                </div>
                            </div>
                        )
                    } )}
                </div>
            </div>
        );
}


export default PriceSectorPerformance