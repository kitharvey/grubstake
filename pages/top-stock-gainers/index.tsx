import { InferGetServerSidePropsType } from 'next';
import React from 'react'
import useSWR from 'swr';
import TableTickers from '../../components/TableTickers';
import { fetcher } from '../../fetcher/fetcher';

const getServerSideProps = async () => {
    const gainers = await fetcher('gainers');     
    return {
      props:  {
        gainers,
        }
    }
}


const index = ({gainers}:  InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { data: gainersData } = useSWR('gainers', fetcher, { initialData: gainers })
    if(!gainersData) return <div>Loading...</div>
        return (
            <div className='container mx-auto p-10'>
                <TableTickers title='Stock Market Top Gainers' tableItems={gainersData} />
            </div>
        );
}


export default index