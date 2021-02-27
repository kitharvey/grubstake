import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr';
import PriceChart from '../../components/PriceChart';
import PriceDetailCard from '../../components/PriceDetailCard';
import { fetcher } from '../../fetcher/fetcher';



const PriceDetails: React.FC = () => {
    const router = useRouter();
    const { priceDetails } = router.query;
    const { data: priceData } = useSWR(`quote/${priceDetails}`, fetcher)
    const { data: chartData } = useSWR(`historical-price-full/${priceDetails}`, fetcher)
    // console.log({priceDetails, chartData})
    if(!priceData || !chartData) return <div>Loading...</div>
        return (
            <div className='flex items-center justify-center h-5/6 w-full' >
                <div className='container p-10'>
                    <h1 className='font-black' >{priceDetails}&nbsp;&nbsp;&nbsp;<span className='text-sm' >{priceData[0].name ? priceData[0].name : priceData[0].companyName}</span> </h1>
                    <div className='mt-10 flex' >
                        <PriceDetailCard priceData={priceData} />
                        <PriceChart chartData={chartData.historical} />
                    </div>
                </div>
            </div>

        );
}



export default PriceDetails