import { InferGetServerSidePropsType } from 'next';
import React from 'react'
import { SyncLoader } from 'react-spinners';
import useSWR from 'swr';
import TableTickers from '../../components/TableTickers';
import { fetcher } from '../../fetcher/fetcher';

const getServerSideProps = async () => {
    const losers = await fetcher('losers');     
    return {
      props:  {
        losers,
        }
    }
}


const index = ({losers}:  InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { data: losersData } = useSWR('losers', fetcher, { initialData: losers })
    
    if(!losersData) {
        return (
                <div className='w-full h-full flex justify-center items-center' > 
                        <SyncLoader color='#2563EB' size={5} margin={2} /> 
                </div>    
        ) 
    } 
        return (
            <div className='container mx-auto p-10'>
                <TableTickers title='Stock Market Top Losers' tableItems={losersData} />
            </div>
        );
}


export default index