// import { InferGetStaticPropsType } from 'next';
import React from 'react'
// import { getStaticProps } from '../pages';
import Stripe from './Stripe';
function Crawler(
  // {users}:  InferGetStaticPropsType<typeof getStaticProps>
  ) {
        return (
              <div className='w-full overflow-hidden shadow-lg border-b border-t border-gray-100 border-solid py-2 bg-white' >
                  <div className='w-max flex items-center' >
                    <Stripe />
                    <Stripe />
                    <Stripe />
                  </div>
              </div>
        );
}






export default Crawler