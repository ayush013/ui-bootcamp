export default class HttpClient {
    getUrl = 'https://jsonplaceholder.typicode.com/todos';

    constructor() {}

    async getAllTodos() {
        try {
            const response = await fetch(this.getUrl);
            const data = await response.json();
            return data.map(({ id, title, completed }) => {
                return {
                    id,
                    value: title,
                    done: completed
                }
            })
        } catch (e) {
            console.error('Failed to fetch', e)
        }

    }

}