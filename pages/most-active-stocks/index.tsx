import { InferGetServerSidePropsType } from 'next';
import React from 'react'
import { SyncLoader } from 'react-spinners';
import useSWR from 'swr';
import Table from '../../components/Table';
import { fetcher } from '../../fetcher/fetcher';

const index = ({mostSearchedStocks}:  InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { data: actives } = useSWR('actives', fetcher, { initialData: mostSearchedStocks })
    if(!actives)  {
        return (
                <div className='w-full h-full flex justify-center items-center' > 
                        <SyncLoader color='#2563EB' size={5} margin={2} /> 
                </div>    
        ) 
    } 
        return (
            <div className='container mx-auto p-10'>
                <Table title='Most Searched Stocks' tableItems={actives} />
            </div>
        );
}

const getServerSideProps = async () => {
    const mostSearchedStocks = await fetcher('quote/AAPL,FB,GOOG,MSFT,ZNGA,NVDA,WBA,PIH');   
    return {
      props:  {
        mostSearchedStocks,
        }
    }
}





export default index