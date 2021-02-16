import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import majorIndexes from '../data/major';
import { PricesProps } from '../interfaces';
import Link from 'next/link'

const Prices: React.FC = ({}) => {
    const items = majorIndexes.slice(0, 5)
        return (
            <div>
                <Link href='/Majors Indexes' >
                    <div className='flex items-center justify-between cursor-pointer hover:text-blue-800'>
                        <h1>Majors Indexes</h1>
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </div>
                </Link>
                <div>
                    {items.map( (item: PricesProps) => {
                        return (
                            <Link href={`/${item.name}`} key={item.symbol} >
                                <div className='grid grid-cols-3 text-sm py-4 px-2 bg-white mt-4 rounded-md cursor-pointer transform transition-all hover:-translate-y-1 hover:shadow-md hover:text-blue-800' >
                                    <div className='text-left' >
                                        <span>{item.symbol}</span>
                                    </div>
                                    <div className={ 'text-center'} >
                                        <span className={item.change > 0 ? 'text-green-500 bg-green-100 px-2 py-1 rounded-full' : 'text-red-500 bg-red-100 px-2 py-1 rounded-full'} >
                                            {item.changesPercentage}%
                                        </span>
                                    </div>
                                    <div className='text-right' >
                                        <span>{item.price}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    } )}
                </div>
            </div>
        );
}


export default Prices