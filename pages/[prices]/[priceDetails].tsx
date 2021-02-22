import { useRouter } from 'next/router';
import React from 'react'
import PriceChart from '../../components/PriceChart';
import PriceDetailCard from '../../components/PriceDetailCard';
import priceData from '../../data/price'

interface PriceDetailsProps {

}

const PriceDetails: React.FC<PriceDetailsProps> = () => {
    const router = useRouter();
    const { priceDetails } = router.query;
        return (
            <div className='flex items-center justify-center h-5/6 w-full' >
                <div className='container p-10'>
                    <h1 className='font-black' >{priceDetails}  {priceData[0].symbol}</h1>
                    <div className='mt-10 flex' >
                        <PriceDetailCard priceData={priceData} />
                        <PriceChart />
                    </div> 
                </div>
            </div>

        );
}


export default PriceDetails