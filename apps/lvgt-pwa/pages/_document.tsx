// apps/lvgt-pwa/pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A0A0F" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-background text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
