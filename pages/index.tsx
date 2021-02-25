import { InferGetStaticPropsType } from 'next';
import React from 'react'
import useSWR from 'swr';
// import Crawler from '../components/Crawler';
import News from '../components/News';
import Prices from '../components/Prices';
import PricesTickers from '../components/PricesTickers';
import PriceSectorPerformance from '../components/PriceSectorPerformance';
import { fetcher } from '../fetcher/fetcher';

export const getStaticProps = async () => {
        const news = await fetcher('stock_news');     
        const mostSearched = await fetcher('quote/AAPL,FB,GOOG,MSFT,ZNGA,NVDA,WBA,PIH');     
        const gainers = await fetcher('gainers');     
        const losers = await fetcher('losers');     
        const currencies = await fetcher('quotes/forex');     
        const crypto = await fetcher('quotes/crypto');     
        const sectorPerformance = await fetcher('sectors-performance');        
        return {
          props:  {
                news,
                mostSearched,
                gainers,
                losers,
                currencies,
                crypto,
                sectorPerformance,
            }
        }
}


function index({
        news,
        mostSearched,
        gainers,
        losers,
        currencies,
        crypto,
        sectorPerformance,
    }:  InferGetStaticPropsType<typeof getStaticProps>){
        const { data: newsData } = useSWR('stock_news', fetcher, { initialData: news })
        const { data: mostSearchedData } = useSWR('quote/AAPL,FB,GOOG,MSFT,ZNGA,NVDA,WBA,PIH', fetcher, { initialData: mostSearched })
        const { data: gainersData } = useSWR('gainers', fetcher, { initialData: gainers })
        const { data: losersData } = useSWR('losers', fetcher, { initialData: losers })
        const { data: currenciesData } = useSWR('quotes/forex', fetcher, { initialData: currencies })
        const { data: cryptoData } = useSWR('quotes/crypto', fetcher, { initialData: crypto })
        const { data: sectorPerformanceData } = useSWR('sectors-performance', fetcher, { initialData: sectorPerformance })

        if(!newsData || !mostSearchedData || !gainersData || !losersData || !currenciesData || !cryptoData || !sectorPerformanceData) return <div>Loading...</div>

        
        return (
                <div>
                        <div className='h-auto container mx-auto px-10 py-16 overflow-x-hidden' >
                                <News newsData={newsData} />
                                <div className='grid grid-cols-3 gap-12 mt-16' >
                                        <Prices title='Most Searched' priceData={mostSearchedData} />
                                        <PricesTickers title='Gainers' priceData={gainersData} />
                                        <PricesTickers title='Losers' priceData={losersData} />
                                        <Prices title='Currencies' priceData={currenciesData} />
                                        <Prices title='Cryptocurrency' priceData={cryptoData} />
                                        <PriceSectorPerformance title='Sector Performance' priceData={sectorPerformanceData} />
                                </div>
                        </div>
                </div>
        );
}


export default index