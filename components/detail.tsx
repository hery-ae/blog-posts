type PostProps = {
    title: string,
    date: string,
    author: string,
    content: string,
}

export default function Detail({ title, date, author, content }: PostProps) {
    return (
        <div className="col-12 col-lg-8 pb-3">
            <div className="row mb-3">
                <div className="col">
                    <h3 className="my-0 fw-bold">{ title }</h3>
                    <p className="text-muted small">{ `${date} by ${author}` }</p>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col" dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        </div>
    )
}
