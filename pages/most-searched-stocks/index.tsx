import { InferGetServerSidePropsType } from 'next';
import React from 'react'
import useSWR from 'swr';
import Table from '../../components/Table';
import { fetcher } from '../../fetcher/fetcher';

const index = ({mostSearchedStocks}:  InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { data: mostSearchedData } = useSWR('quote/AAPL,FB,GOOG,MSFT,ZNGA,NVDA,WBA,PIH', fetcher, { initialData: mostSearchedStocks })
    if(!mostSearchedData) return <div>Loading...</div>
        return (
            <div className='container mx-auto p-10'>
                <Table title='Most Searched Stocks' tableItems={mostSearchedData} />
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