import { Html, Head, Main, NextScript } from 'next/document'

import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script>
      <Script src="./clarity.js" />

      </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
