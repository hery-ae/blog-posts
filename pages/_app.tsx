import { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from './../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement, appTitle: string) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const appTitle = 'LINTING POST'

    if (Component.getLayout) {
        return Component.getLayout(<Component {...pageProps} />, appTitle)
    }

    return (
        <Layout
            appTitle={ appTitle }
            pageTitle={ pageProps.pageTitle ? `${ pageProps.pageTitle } - ${ appTitle }` : appTitle }
        >
            <Component {...pageProps} />
        </Layout>
    )
}
