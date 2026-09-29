import axios from "axios";

async function fetchBlog (id) {
    try {
        const result = await axios.get(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`,{
            headers: {
                'novi-education-project-id': '04ea586a-df7b-4331-937f-dd4f50496a34',
                'Accept': 'application/json',
            }
        });
        console.log(result)
    } catch (e) {
        console.error(e);
    }
}

export default fetchBlog