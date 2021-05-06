import { InferGetStaticPropsType } from 'next';
import React from 'react'
import { SyncLoader } from 'react-spinners';
import useSWR from 'swr';
import News from '../components/News';
import PricesTickers from '../components/PricesTickers';
import { fetcher } from '../fetcher/fetcher';

export const getServerSideProps = async () => {
        const news = await fetcher('stock_news');     
        const mostSearched = await fetcher('actives');     
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
    }:  InferGetStaticPropsType<typeof getServerSideProps>) => {
        const { data: newsData } = useSWR('stock_news', fetcher, { initialData: news })
        const { data: activesData } = useSWR('actives', fetcher, { initialData: mostSearched })
        const { data: gainersData } = useSWR('gainers', fetcher, { initialData: gainers })
        const { data: losersData } = useSWR('losers', fetcher, { initialData: losers })

        if(!newsData || !activesData || !gainersData || !losersData) {
                return (
                        <div className='w-full h-full flex justify-center items-center' > 
                                <SyncLoader color='#2563EB' size={5} margin={2} /> 
                        </div>    
                ) 
        } 

        
        return (
                <div>
                        <div className='h-auto container mx-auto px-10 py-16 overflow-x-hidden' >
                                <News newsData={newsData} />
                                <div className='grid grid-cols-1 gap-12 mt-16 md:grid-cols-3' >
                                        <PricesTickers title='Actives' priceData={activesData} link='most-active-stocks' />
                                        <PricesTickers title='Gainers' priceData={gainersData} link='top-stock-gainers'  />
                                        <PricesTickers title='Losers' priceData={losersData} link='top-stock-losers'  />
                                </div>
                        </div>
                </div>
        );
}


export default index