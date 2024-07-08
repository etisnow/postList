import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 3) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            params: {
                _limit: limit,
                _page: page
            }
        })
        console.log(response);
        return response
    }
}