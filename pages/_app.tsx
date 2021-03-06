import React from 'react'
import '../styles/style.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import useSWR, { SWRConfig } from 'swr'
import Crawler from '../components/Crawler'
import { fetcher } from '../fetcher/fetcher'
import { SyncLoader } from 'react-spinners';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { data: mostSearchedData } = useSWR('quote/AAPL,FB,GOOG,MSFT,ZNGA,NVDA,WBA,PIH', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0})

  return (
      <SWRConfig 
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0
      }}
      >
          <Head>
              <meta charSet="utf-8" />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <title>Shtonks</title>
              <meta name="title" content="grub&#183;stake | Financial Modeling Prep Discounted Clone" />
              <meta
              name="description"
              content="Access all stocks discounted cash flow statements, market price, stock markets news, and learn more about Financial Modeling. Learn M&A, LBO, DCF, Comps, and Financial Statement Modeling thought concrete examples"
              />
          </Head>
          <div className='w-full h-screen' >
            <Header />
            {mostSearchedData 
              ? <Crawler mostSearchedData={mostSearchedData} /> 
              : <div className='w-full flex justify-center items-center overflow-hidden shadow-lg border-b border-t border-gray-100 border-solid py-2 bg-white' > 
                  <SyncLoader color='#2563EB' size={5} margin={2} /> 
                </div> }

            <Component {...pageProps} />
          </div>
      </SWRConfig>
  ) 
}