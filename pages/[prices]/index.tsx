import { useRouter } from 'next/router';
import React from 'react'
import Table from '../../components/Table';
import majorIndexes from '../../data/major';

interface indexProps {

}

const index: React.FC<indexProps> = ({}) => {
    const router = useRouter();
    const { prices } = router.query;
        return (
            <div className='container mx-auto p-10'>
                <Table title={prices} tableItems={majorIndexes} />
            </div>
        );
}


export default index