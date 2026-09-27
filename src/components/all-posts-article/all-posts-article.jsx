import { Link } from 'react-router-dom';

function All_posts_article (title, author, reactions, shared, id) {

    return(
        <>
                <div className="title-author-wrapper">
                    <Link to={`/all-posts/${id}`}>
                        {title}
                    </Link>
                    <p className="author">
                        ({author})
                    </p>
                </div>
                <p className="comments-shared">
                    {reactions} reacties - {shared} keer gedeeld
                </p>
        </>
    )
}

export default All_posts_article;