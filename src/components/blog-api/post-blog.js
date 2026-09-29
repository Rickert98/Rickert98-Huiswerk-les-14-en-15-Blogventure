import axios from "axios";

async function postBlog (blog) {
    try {
        const result = await axios.post(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts`,blog,{
            headers: {
                'novi-education-project-id': '04ea586a-df7b-4331-937f-dd4f50496a34',
                'Content-Type': 'application/json'
            },
        });
        console.log(result)
    } catch (e) {
        console.error(e);
    }
}

export default postBlog