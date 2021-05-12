import { InferGetServerSidePropsType } from 'next';
import React from 'react'
import { SyncLoader } from 'react-spinners';
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
    if(!gainersData) {
        return (
                <div className='w-full h-full flex justify-center items-center' > 
                        <SyncLoader color='#2563EB' size={5} margin={2} /> 
                </div>    
        ) 
    } 
        return (
            <div className='container mx-auto px-2 py-10'>
                <TableTickers title='Stock Market Top Gainers' tableItems={gainersData} />
            </div>
        );
}


export default index