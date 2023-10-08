import { ReactNode } from "react"
import Sidebar from "./sidebar"

type LayoutProps = {
    children: ReactNode
}

export default function SidebarLayout({ children }: LayoutProps) {
    return (
        <div className="container-fluid">
            <div className="row">
                <main className="col-12 col-lg-8 mt-4 mb-3 mb-lg-5">{ children }</main>
                <aside className="col-12 col-md-6 col-lg-4 mt-0 mb-5 mt-lg-4" style={{ minWidth: '316px' }}>
                    <Sidebar />
                </aside>
            </div>
        </div>
    )
}
