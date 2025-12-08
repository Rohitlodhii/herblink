import '../styles/globals.css'
import Layout from '../components/Layout'
import { DataProvider } from '../lib/dataContext'

export default function App({ Component, pageProps }){
  return (
    <DataProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </DataProvider>
  )
}
