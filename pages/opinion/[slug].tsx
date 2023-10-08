import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layout";
import SidebarLayout from "../../components/sidebar-layout";

const Page: NextPageWithLayout = () => {
    return (
        <>
            <div className="row mb-3">
                <div className="col">
                    <h3 className="my-0 fw-bold">{ 'Lorem Ipsum' }</h3>
                    <p className="text-muted small">{ 'January 1, 2021 by Mark' }</p>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <p>
                        Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <SidebarLayout>{ page }</SidebarLayout>
        </Layout>
    )
}

export default Page
