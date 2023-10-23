import Post from "../../components/post"

export default function Page({ posts }) {
    return (
        <>
            <div className="row mb-3">
                {
                    posts.data.length >= 1 && (
                        <Post
                            priority={ 1 }
                            position={ 1 }
                            pathname={ `/${posts.data[0].category.name}/${posts.data[0].name}` }
                            category={ posts.data[0].category.verbose_name }
                            title={ posts.data[0].title }
                            thumbnail={ posts.data[0].thumbnail }
                        />
                    )
                }
            </div>
            <div className="row mb-3 px-1 px-md-0 justify-content-between">
                {
                    posts.data.filter( post => post.priority === 2 ).slice( 0, 2 ).map((post, key) => (
                        <Post
                            key={ post.id }
                            priority={ post.priority }
                            position={ key + 1 }
                            pathname={ `/${post.category.name}/${post.name}` }
                            category={ post.category.verbose_name }
                            title={ post.title }
                            thumbnail={ post.thumbnail }
                        />
                    ))
                }
            </div>
            <div className="row mb-3 px-1 px-md-0 justify-content-center justify-content-md-start">
                {
                    posts.data.filter( post => post.priority > 2 ).slice( 0, 3 ).map((post, key) => (
                        <Post
                            key={ post.id }
                            priority={ post.priority }
                            position={ key + 1 }
                            pathname={ `/${post.category.name}/${post.name}` }
                            category={ post.category.verbose_name }
                            title={ post.title }
                            thumbnail={ post.thumbnail }
                        />
                    ))
                }
            </div>
            <div className="row mb-3 px-1 px-md-0 justify-content-center justify-content-md-start">
                {
                    posts.data.filter( post => post.priority > 2 ).slice( 3, 6 ).map((post, key) => (
                        <Post
                            key={ post.id }
                            priority={ post.priority }
                            position={ key + 1 }
                            pathname={ `/${post.category.name}/${post.name}` }
                            category={ post.category.verbose_name }
                            title={ post.title }
                            thumbnail={ post.thumbnail }
                        />
                    ))
                }
            </div>
            <div className="row mb-3 px-1 px-md-0 justify-content-center justify-content-md-start">
                {
                    posts.data.filter( post => post.priority > 2 ).slice( 6, 9 ).map((post, key) => (
                        <Post
                        key={ post.id }
                        priority={ post.priority }
                        position={ key + 1 }
                        pathname={ `/${post.category.name}/${post.name}` }
                        category={ post.category.verbose_name }
                        title={ post.title }
                        thumbnail={ post.thumbnail }
                        />
                    ))
                }
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/business/posts`

    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${process.env.API_TOKEN}` }
    })

    const posts = await res.json()

    const pageTitle = posts.data.length >= 1 ? posts.data[0].category.verbose_name : posts.data.length

    return {
        props: {
            posts,
            pageTitle,
        }
    }
}
