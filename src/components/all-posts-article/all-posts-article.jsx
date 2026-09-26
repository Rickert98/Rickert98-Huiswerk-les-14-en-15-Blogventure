import { Link } from 'react-router-dom';


function All_posts_article (title, author, reactions, shared, id) {

    return(
        <>
            <article>
                <div>
                    <Link to={`/all-posts/${id}`}>
                        {title}
                    </Link>
                    <p>
                        {author}
                    </p>
                </div>
                <p>
                    {reactions} reacties - {shared} keer gedeeld
                </p>
            </article>
        </>
    )
}

export default All_posts_article;