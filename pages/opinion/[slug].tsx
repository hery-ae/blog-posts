import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layout";
import Detail from "../../components/detail";
import RelatedPost from "../../components/related_post";

const Page: NextPageWithLayout = () => {
    return <Detail />
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

export default Page
