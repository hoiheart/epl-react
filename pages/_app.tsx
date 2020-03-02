import { AppProps } from 'next/app'
import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps}></Component>
  </Layout>
)

export default MyApp