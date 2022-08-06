import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet" /> 
      <script
        async
        id="chiffre:analytics"
        src="https://chiffre.io/analytics.js"
        data-chiffre-project-id="Gp2eDpPv6kjk4swo"
        data-chiffre-public-key="pk.T4QI36BEBNT8_O6JN4mNQiANxQ381FAtNtJ6ItcM2HE"
        referrerPolicy="origin"
        crossOrigin="anonymous"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

