import { InferGetStaticPropsType } from 'next';
import React from 'react'
import useSWR from 'swr';
import Crawler from '../components/Crawler';
import News from '../components/News';
import Prices from '../components/Prices';
import { fetcher } from '../fetcher/fetcher';

export const getStaticProps = async () => {
        const news = await fetcher('stock_news');     
        const mostSearched = await fetcher('quote/AAPL,FB,GOOG,MSFT,ZNGA,NVDA,WBA,PIH');     
        return {
          props: { 
                  news,
                  mostSearched
                 }
        }
      }
      



function index({news, mostSearched}:  InferGetStaticPropsType<typeof getStaticProps>){
        const { data: newsData } = useSWR('stock_news', fetcher, { initialData: news })
        const { data: mostSearchedData } = useSWR('quote/AAPL,FB,GOOG,MSFT,ZNGA,NVDA,WBA,PIH', fetcher, { initialData: mostSearched })
        return (
                <>
                        <Crawler mostSearchedData={mostSearchedData} />
                        <div className='h-auto container mx-auto px-10 py-16 overflow-x-hidden' >
                                <News newsData={newsData} />
                                <div className='grid grid-cols-3 gap-12 mt-16' >
                                        <Prices title='Most Searched' mostSearchedData={mostSearchedData} />
                                        <Prices title='Gainers' mostSearchedData={mostSearchedData} />
                                        <Prices title='Losers' mostSearchedData={mostSearchedData} />
                                        <Prices title='Currencies' mostSearchedData={mostSearchedData} />
                                        <Prices title='Cryptocurrency' mostSearchedData={mostSearchedData} />
                                        <Prices title='Sector Performance' mostSearchedData={mostSearchedData} />
                                </div>
                        </div>
                </>
        );
}


export default index