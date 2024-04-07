import 'src/styles/globals.css'

import type { AppProps } from 'next/app'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}
function MyApp({ Component, pageProps }: AppProps<SharedPageProps>) {
  return <Component {...pageProps} />
}

export default MyApp
