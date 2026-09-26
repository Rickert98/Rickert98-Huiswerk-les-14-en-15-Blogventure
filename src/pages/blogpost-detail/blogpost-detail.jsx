import { useParams } from 'react-router-dom';
import posts from '../../constants/data.json'

import Date_converter from '../../helpers/date-converter.js'

function Blogpost_detail () {
    const { id } = useParams();
    const post = posts.find((post_info) => {
        return `${post_info.id}` === `${id}`;
    })

    return (
        <>
            <h2>{post.title} ({post.readTime})</h2>
            <h3>{post.subtitle}</h3>
            <p>Geschreven door {post.author} op {Date_converter(post.created)}</p>
            <p>{post.content}</p>
            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
        </>
    )
}

export default Blogpost_detail;