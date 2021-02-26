import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import React from 'react'
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
    const router = useRouter();
    const { prices } = router.query;
    const { data: losersData } = useSWR('losers', fetcher, { initialData: losers })
        return (
            <div className='container mx-auto p-10'>
                <TableTickers title={prices} tableItems={losersData} />
            </div>
        );
}


export default index