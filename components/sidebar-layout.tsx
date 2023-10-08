import { ReactNode } from "react"
import Sidebar from "./sidebar"

type LayoutProps = {
    children: ReactNode
}

export default function SidebarLayout({ children }: LayoutProps) {
    return (
        <>
            <main className={ 'col-12 col-lg-8 d-lg-inline-block align-top mt-4 mb-5' }>{ children }</main>
            <aside className={ 'col-12 col-lg-4 d-lg-inline-block align-top mt-4 mb-5 position-sticky top-0' }>
                <Sidebar />
            </aside>
        </>
    )
}
