import { InferGetStaticPropsType } from 'next';
import React from 'react'
import Header from '../components/Header'
import Posts from '../components/Posts';

export const getStaticProps = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
      
        return {
          props: { users: data }
        }
      }
      



function index({users}:  InferGetStaticPropsType<typeof getStaticProps>){
        return (
                <div className='' >
                    <Header />
                    <Posts users={users} />
                </div>
        );
}


export default index