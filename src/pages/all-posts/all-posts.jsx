import './all-posts.css'

import post_article from '../../components/all-posts-article/all-posts-article.jsx'

import { useEffect } from 'react';
import React from 'react';
import axios from "axios";




function All_posts () {
    const [blogs, setBlogs] = React.useState([]);

    async function fetchAllBlogs () {
        try {
            const result = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts',{
                headers: {
                    'novi-education-project-id': '04ea586a-df7b-4331-937f-dd4f50496a34',
                    'Accept': 'application/json',
                }
            });
            console.log(result.data);
           setBlogs(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchAllBlogs();
        }, []);

    return (
        <>
            <h1>Bekijk hier alle {blogs.length} posts op het platform</h1>
            <main>
                <ul className="all-posts-wrapper">
                    {
                        blogs.length > 0 ? blogs.map((blog) => {
                            return (
                                <li key={blog.id} className="all-posts-list">
                                    {post_article(blog.title, blog.author, blog.comments, blog.shares, blog.id)}
                                </li>
                            )
                        }) : <p>Oepsie floepsie zo te zien is het niet gelukt om de data op te halen :(</p>
                    }
                </ul>
            </main>
        </>
    )
}

export default All_posts;