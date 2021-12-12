export default class PostService {
    static async getAll(limit = 10, page = 1) {

        const url = new URL("https://jsonplaceholder.typicode.com/posts"),
              params = {
                _limit: limit,
                _page: page
              }

        Object.keys(params).forEach(key =>
            url.searchParams.append(key, params[key])
        )

        const response = await fetch(url);

        const data = await response.json();
        const count = response.headers.get('X-Total-Count');

        return [data, count]

    }

    static async getById(id) {

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        return data;

    }

    static async getCommentsByPostId(id) {

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const data = await response.json();
        return data;

    }
}