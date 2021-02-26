import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
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
    const router = useRouter();
    const { prices } = router.query;
    const { data: gainersData } = useSWR('gainers', fetcher, { initialData: gainers })
        return (
            <div className='container mx-auto p-10'>
                <TableTickers title={prices} tableItems={gainersData} />
            </div>
        );
}


export default index