import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <link href="https://fonts.googleapis.com" rel="preconnect" />
                <link href="https://fonts.cdnfonts.com/css/halcom" rel="stylesheet" />
                <link href="https://fonts.cdnfonts.com/css/vic" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
