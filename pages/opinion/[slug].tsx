import { ReactElement, ReactNode } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layout";
import Detail from "../../components/detail";
import RelatedPost from "../../components/related_post";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Post from "../../components/post";

const Page: NextPageWithLayout<{ post: { title: string, date: string, author: string, content: string, related_posts: [] }}> = ({ post }) => {
    return (
        <>
            <Detail
                title={ post.title }
                date={ post.date }
                author={ post.author }
                content={ post.content }
            />
            <RelatedPost>
                {
                    post.related_posts.map( ( post: { id: number, name: string, title: string, thumbnail: string, updated_at: string, category: { name: string, verbose_name: string } }, key ) => (
                        <Post
                            key={ post.id }
                            priority={ 0 }
                            position={ key }
                            pathname={ `/${post.category.name}/${post.name}` }
                            category={ post.category.verbose_name }
                            title={ post.title }
                            thumbnail={ post.thumbnail }
                            updatedAt={ post.updated_at }
                        />
                    ))
                }
            </RelatedPost>
        </>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <div className="row">
                { page }
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async({ params }) => {
    const url = `${process.env.API_URL}/opinion/${params.slug}.json`
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
