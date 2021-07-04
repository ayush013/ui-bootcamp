import BaseView from "./BaseView";

export default class Home extends BaseView {
    constructor() {
        super();
        this.setTitle('Home');
    }

    getHTML() {
        return `<h1>Home</h1>
        <p class="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum corporis voluptatum earum reprehenderit.
         Eum, blanditiis illo ab culpa sequi nisi similique debitis adipisci accusamus? 
         Ad tenetur culpa voluptatem quae a!</p>
        `
    }
}