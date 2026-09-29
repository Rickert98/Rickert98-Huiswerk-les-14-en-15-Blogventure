import axios from "axios";

async function deleteBlog (id) {
    try {
        const result = await axios.delete(`https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${id}`,{
            headers: {
                'novi-education-project-id': '04ea586a-df7b-4331-937f-dd4f50496a34',
            },
        });
        console.log(result)
    } catch (e) {
        console.error(e);
    }
}

export default deleteBlog