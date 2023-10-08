import { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from './../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => {
        return (
            <Layout><main className={ 'container-fluid mt-3 mb-5' }>{ page }</main></Layout>
        )
    })

    return getLayout(<Component {...pageProps} />)
}
