import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

class Document extends NextDocument<Props> {
    render() {
        return (
            <Html lang="en">
                <Head/>
                <body className='scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-gray-100'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );

    }
       
}


export default Document