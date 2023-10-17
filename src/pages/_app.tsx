import React from 'react'
import GlobalStyle from '@/layout/globalStyles';
import Head from 'next/head'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Modele | Interiores & Flores</title>
                <meta name="description" content="Modele | Interiores & Flores" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
            <GlobalStyle />
        </>
    )
}
