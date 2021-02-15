// import { InferGetStaticPropsType } from 'next';
import React from 'react'
import News from '../components/News';
// import Header from '../components/Header'
// import Posts from '../components/Posts';

export const getStaticProps = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
      
        return {
          props: { users: data }
        }
      }
      



function index(
        // {users}:  InferGetStaticPropsType<typeof getStaticProps>
        ){
        return (
                <div className='h-screen container mx-auto px-10' >
                        <News />
                </div>
        );
}


export default index