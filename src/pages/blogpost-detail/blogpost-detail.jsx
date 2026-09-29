import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect } from 'react';
import React from 'react';

import Date_converter from '../../helpers/date-converter.js'

function Blogpost_detail () {
    const [blog, setBlog] = React.useState([]);
    const { id } = useParams();

    async function fetchBlog () {
        try {
            const result = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`,{
                headers: {
                    'novi-education-project-id': '04ea586a-df7b-4331-937f-dd4f50496a34',
                    'Accept': 'application/json',
                }
            });
            setBlog(result.data);
            console.log(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchBlog();
    }, []);

    return (
        <>
            <main>
                {Object.keys(blog).length > 0 && (
                    <section className="post-wrapper">
                        <h2>{blog.title} ({blog.readTime})</h2>
                        <h3>{blog.subtitle}</h3>
                        <p>Geschreven door {blog.author} op {Date_converter(blog.created)}</p>
                        <p>{blog.content}</p>
                        <p>{blog.comments} reacties - {blog.shares} keer gedeeld</p>
                        <Link to="/all-posts">Terug naar de overzichtspagina</Link>
                    </section>
                )
                }
            </main>
        </>
    )
}

export default Blogpost_detail;