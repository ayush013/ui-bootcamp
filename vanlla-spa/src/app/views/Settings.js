import BaseView from "./BaseView";

export default class Settings extends BaseView {
    constructor() {
        super();
        this.setTitle('Settings');
    }

    getHTML() {
        return `<h1>Settings</h1>`
    }
}