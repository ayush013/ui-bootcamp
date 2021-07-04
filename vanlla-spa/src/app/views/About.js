import BaseView from "./BaseView";

export default class About extends BaseView {
    constructor() {
        super();
        this.setTitle('About');
    }

    getHTML() {
        return `<h1>About</h1>
        <p class="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla facere obcaecati dolore. 
        Et dolorum laboriosam iure, praesentium, molestiae atque fuga quod sapiente inventore vero numquam optio
         ipsa exercitationem aspernatur tempore.</p>
        `
    }

}