// import { InferGetStaticPropsType } from 'next';
import React from 'react'
import News from '../components/News';
import Prices from '../components/Prices';
// import Header from '../components/Header'
// import Posts from '../components/Posts';

// export const getStaticProps = async () => {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
      
//         return {
//           props: { users: data }
//         }
//       }
      



function index(
        // {users}:  InferGetStaticPropsType<typeof getStaticProps>
        ){
        return (
                <div className='h-auto container mx-auto px-10 py-16 overflow-x-hidden' >
                        <News />
                        <div className='grid grid-cols-3 gap-12 mt-16' >
                                <Prices title='Active' link='top-active-stocks' />
                                <Prices title='Gainers' link='top-stock-gainers' />
                                <Prices title='Losers' link='top-stock-losers' />
                                <Prices title='Currencies' link='currencies' />
                                <Prices title='Cryptocurrency' link='cryptocurrency' />
                                <Prices title='Sector Performance' link='sector-performance' />
                        </div>
                </div>
        );
}


export default index