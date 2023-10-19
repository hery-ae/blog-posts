import Post from "../components/post"

export default function Page({ posts }) {
    return (
        <div className="row mb-3">
            <div className="col-12 position-relative px-0">
                <Post
                    position={ 1 }
                    pathname={ `/${posts.data[0].category.name}/${posts.data[0].pathname}` }
                    category={ posts.data[0].category.verbose_name }
                    title={ posts.data[0].title }
                    image={ process.env.API_URL + posts.data[0].image }
                />
            </div>
        </div>
    )
    {/*    return <List posts={posts} />*/}
}

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/posts.json`
    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${process.env.API_TOKEN}` }
    })

    const posts = await res.json()

    return {
        props: {
            posts,
        }
    }
}
