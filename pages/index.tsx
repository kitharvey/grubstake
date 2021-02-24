import { InferGetStaticPropsType } from 'next';
import React from 'react'
import useSWR from 'swr';
// import Crawler from '../components/Crawler';
import News from '../components/News';
import Prices from '../components/Prices';
import PricesTickers from '../components/PricesTickers';
import PriceSectorPerformance from '../components/PriceSectorPerformance';
import { fetchIndex } from '../fetcher/fetcher';

export const getStaticProps = async () => {
        const indexData = await fetchIndex();      
        return {
          props: indexData
        }
}


function index(indexData:  InferGetStaticPropsType<typeof getStaticProps>){
        const { data } = useSWR('', fetchIndex, { initialData: indexData })
        if(!data) return <div>Loading...</div>
        return (
                <div>
                        <div className='h-auto container mx-auto px-10 py-16 overflow-x-hidden' >
                                <News newsData={data.news} />
                                <div className='grid grid-cols-3 gap-12 mt-16' >
                                        <Prices title='Most Searched' priceData={data.mostSearched} />
                                        <Prices title='Gainers' priceData={data.gainers} />
                                        <Prices title='Losers' priceData={data.losers} />
                                        <PricesTickers title='Currencies' priceData={data.currencies} />
                                        <PricesTickers title='Cryptocurrency' priceData={data.crypto} />
                                        <PriceSectorPerformance title='Sector Performance' priceData={data.sectorPerformance} />
                                </div>
                        </div>
                </div>
        );
}


export default index