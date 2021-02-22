import React from 'react'
import '../styles/style.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>Shtonks</title>
            {/* <link rel="shortcut icon" type="image/png" href="/icon.png" sizes="50x32"/> */}
            <meta name="title" content="grub&#183;stake | Financial Modeling Prep Discounted Clone" />
            <meta
            name="description"
            content="Access all stocks discounted cash flow statements, market price, stock markets news, and learn more about Financial Modeling. Learn M&A, LBO, DCF, Comps, and Financial Statement Modeling thought concrete examples"
            />
        </Head>
        <div className='w-full h-screen' >
          <Header />
          <Component {...pageProps} />
        </div>
     </>
  ) 
}