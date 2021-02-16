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
                <div className='h-auto container mx-auto px-10' >
                        <News />
                        <div className='grid grid-cols-3 gap-10 my-10' >
                                <Prices />
                                <Prices />
                                <Prices />
                                <Prices />
                                <Prices />
                                <Prices />
                        </div>
                </div>
        );
}


export default index