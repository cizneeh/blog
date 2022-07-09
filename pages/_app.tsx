import '../styles/globals.css'
import 'highlight.js/styles/default.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
