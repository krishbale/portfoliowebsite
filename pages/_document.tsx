import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script>
      <Script src='../public/clarity.js' defer />
      </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
