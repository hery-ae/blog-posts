import { ReactElement, ReactNode } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layout";
import Detail from "../../components/detail";
import RelatedPost from "../../components/related_post";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const Page: NextPageWithLayout<{ post: { title: string, date: string, author: string, content: string }}> = ({ post }) => {
    return (
        <Detail
            title={ post.title }
            date={ post.date }
            author={ post.author }
            content={ post.content }
        />
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <div className="row">
                { page }
                <RelatedPost />
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async({ params }) => {
    const url = `${process.env.API_URL}/business/${params.slug}.json`
    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${process.env.API_TOKEN}` }
    })

    const post = await res.json()

    return {
        props: {
            post,
        }
    }
}

export default Page
