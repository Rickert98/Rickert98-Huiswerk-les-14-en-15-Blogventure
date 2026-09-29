import axios from "axios";

async function putBlog (blog) {
    try {
        const result = await axios.put(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/1`,blog, {
            headers: {
                'novi-education-project-id': '04ea586a-df7b-4331-937f-dd4f50496a34',
                'Content-Type': 'application/json',
                'accept': '*/*'
            },
        });
        console.log(result)
    } catch (e) {
        console.error(e);
    }
}

export default putBlog