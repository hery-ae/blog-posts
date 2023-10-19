import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './header'
import Navbar from './navbar'
import Footer from './footer'

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Blog Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Navbar />
            <main className={ 'container-fluid mt-3 mb-5' }>{ children }</main>
            <Footer />
        </>
    )
}
