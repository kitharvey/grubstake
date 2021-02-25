import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr';
import Table from '../../components/Table';
import { fetcher } from '../../fetcher/fetcher';

export const getStaticProps = async () => {
    const mostSearched = await fetcher('quote/AAPL,FB,GOOG,MSFT,ZNGA,NVDA,WBA,PIH');     
    return {
      props:  {
            mostSearched,
        }
    }
}


const index = ({mostSearched}:  InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    const { prices } = router.query;
    const { data: mostSearchedData } = useSWR('quote/AAPL,FB,GOOG,MSFT,ZNGA,NVDA,WBA,PIH', fetcher, { initialData: mostSearched })
        return (
            <div className='container mx-auto p-10'>
                <Table title={prices} tableItems={mostSearchedData} />
            </div>
        );
}


export default index