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
}