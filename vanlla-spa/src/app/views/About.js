import BaseView from "./BaseView";

export default class About extends BaseView {
    constructor() {
        super();
        this.setTitle('About');
    }

    getHTML() {
        return `<h1>About</h1>`
    }

}