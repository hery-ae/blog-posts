import { ReactNode } from "react"

type LayoutProps = {
    children: ReactNode
}

export default function RelatedPost({ children }: LayoutProps) {
    return (
        <div className="col-12 col-md-6 col-lg-4" style={{ minWidth: '316px' }}>
            <div className="row">
                <div className="col">
                    <h4 className="fst-italic">Related posts</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">{ children }</div>
            </div>
        </div>
    )
}
