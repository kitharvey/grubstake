import { InferGetStaticPropsType } from 'next';
import React from 'react'
import { getStaticProps } from '../pages';
import mostActiveStocks from '../data/active'
function Posts({users}:  InferGetStaticPropsType<typeof getStaticProps>) {
        return (
                <div className='w-full overflow-hidden flex items-center justify-center shadow py-2' >
                    <div className='animate-ticker flex font-thin text-sm' >{mostActiveStocks.map( (mostActiveStock: any) => {
                      return (
                        <p className='px-5 whitespace-nowrap inline-block' key=    {mostActiveStock.ticker} >
                          <span>{mostActiveStock.ticker}&nbsp;</span>
                          <span>{mostActiveStock.price}&nbsp;</span>
                          <span className={mostActiveStock.changes > 0 ? 'text-green-500' : 'text-red-500'} >{mostActiveStock.changes}&nbsp;</span>
                          <span className={mostActiveStock.changes > 0 ? 'text-green-500' : 'text-red-500'} >{mostActiveStock.changesPercentage}&nbsp;</span>
                        </p>
                      )})}
                    </div>
                    <div className='animate-ticker flex font-thin text-sm' >{mostActiveStocks.map( (mostActiveStock: any) => {
                      return (
                        <p className='px-5 whitespace-nowrap inline-block' key=    {mostActiveStock.ticker} >
                          <span>{mostActiveStock.ticker}&nbsp;</span>
                          <span>{mostActiveStock.price}&nbsp;</span>
                          <span className={mostActiveStock.changes > 0 ? 'text-green-500' : 'text-red-500'} >{mostActiveStock.changes}&nbsp;</span>
                          <span className={mostActiveStock.changes > 0 ? 'text-green-500' : 'text-red-500'} >{mostActiveStock.changesPercentage}&nbsp;</span>
                        </p>
                      )})}
                    </div>
                    <div className='animate-ticker flex font-thin text-sm' >{mostActiveStocks.map( (mostActiveStock: any) => {
                      return (
                        <p className='px-5 whitespace-nowrap inline-block' key=    {mostActiveStock.ticker} >
                          <span>{mostActiveStock.ticker}&nbsp;</span>
                          <span>{mostActiveStock.price}&nbsp;</span>
                          <span className={mostActiveStock.changes > 0 ? 'text-green-500' : 'text-red-500'} >{mostActiveStock.changes}&nbsp;</span>
                          <span className={mostActiveStock.changes > 0 ? 'text-green-500' : 'text-red-500'} >{mostActiveStock.changesPercentage}&nbsp;</span>
                        </p>
                      )})}
                    </div>
                </div>
        );
}


export default Posts