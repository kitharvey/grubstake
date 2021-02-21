import { useRouter } from 'next/router';
import React from 'react'

interface PriceDetailsProps {

}

const PriceDetails: React.FC<PriceDetailsProps> = () => {
    const router = useRouter();
    const { priceID } = router.query;
        return (
            <div className='container mx-auto p-10'>
                hello {priceID}
            </div>
        );
}


export default PriceDetails