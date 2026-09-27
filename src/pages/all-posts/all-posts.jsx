import posts from '../../constants/data.json'
import post_article from '../../components/all-posts-article/all-posts-article.jsx'
import './all-posts.css'

function All_posts () {
    return (
        <>
            <h1>Bekijk hier alle {posts.length} posts op het platform</h1>
            <main>
                <ul className="all-posts-wrapper">
                    {posts.map((post) => {
                        return (
                                <li key={post.id} className="all-posts-list">
                                    {post_article(post.title, post.author, post.comments, post.shares, post.id)}
                                </li>
                            )
                    })}
                </ul>
            </main>
        </>
    )
}

export default All_posts;