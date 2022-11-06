import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { NiftyContext } from '../context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NiftyContext>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </NiftyContext>
  )
}

export default MyApp
