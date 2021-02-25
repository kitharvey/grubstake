import { InferGetStaticPropsType } from 'next';
import React from 'react'
import useSWR from 'swr';
// import Crawler from '../components/Crawler';
import News from '../components/News';
import Prices from '../components/Prices';
import PricesTickers from '../components/PricesTickers';
import { fetcher } from '../fetcher/fetcher';

export const getStaticProps = async () => {
        const news = await fetcher('stock_news');     
        const mostSearched = await fetcher('quote/AAPL,FB,GOOG,MSFT,ZNGA,NVDA,WBA,PIH');     
        const gainers = await fetcher('gainers');     
        const losers = await fetcher('losers');       
        return {
          props:  {
                news,
                mostSearched,
                gainers,
                losers,
            }
        }
}


const index = ({
        news,
        mostSearched,
        gainers,
        losers,
    }:  InferGetStaticPropsType<typeof getStaticProps>) => {
        const { data: newsData } = useSWR('stock_news', fetcher, { initialData: news })
        const { data: mostSearchedData } = useSWR('quote/AAPL,FB,GOOG,MSFT,ZNGA,NVDA,WBA,PIH', fetcher, { initialData: mostSearched })
        const { data: gainersData } = useSWR('gainers', fetcher, { initialData: gainers })
        const { data: losersData } = useSWR('losers', fetcher, { initialData: losers })

        if(!newsData || !mostSearchedData || !gainersData || !losersData) return <div>Loading...</div>

        
        return (
                <div>
                        <div className='h-auto container mx-auto px-10 py-16 overflow-x-hidden' >
                                <News newsData={newsData} />
                                <div className='grid grid-cols-3 gap-12 mt-16' >
                                        <Prices title='Most Searched' priceData={mostSearchedData} link='most-searched-stocks' />
                                        <PricesTickers title='Gainers' priceData={gainersData} link='top-stock-gainers'  />
                                        <PricesTickers title='Losers' priceData={losersData} link='top-stock-losers'  />
                                </div>
                        </div>
                </div>
        );
}


export default index