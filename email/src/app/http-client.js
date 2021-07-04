export default class HttpClient {
    BASE_URL = 'https://jsonplaceholder.typicode.com'

    constructor() { }

    async getEmail() {
        try {
            const emailResponse = await fetch(`${this.BASE_URL}/posts`);
            return await emailResponse.json();
        } catch (e) {
            return await e;
        }

    }


}