import { InferGetServerSidePropsType } from 'next';
import React from 'react'
import { SyncLoader } from 'react-spinners';
import useSWR from 'swr';
import TableTickers from '../../components/TableTickers';
import { fetcher } from '../../fetcher/fetcher';

const getServerSideProps = async () => {
    const activesData = await fetcher('actives');   
    return {
      props:  {
        activesData,
        }
    }
}

const index = ({activesData}:  InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { data: actives } = useSWR('actives', fetcher, { initialData: activesData })
    if(!actives)  {
        return (
                <div className='w-full h-full flex justify-center items-center' > 
                        <SyncLoader color='#2563EB' size={5} margin={2} /> 
                </div>    
        ) 
    } 
        return (
            <div className='container mx-auto px-2 py-10'>
                <TableTickers title='Most Active Stocks' tableItems={actives} />
            </div>
        );
}

export default index