export default class BaseView {
    constructor() {   }

    setTitle(title) {
        document.title = title;
    }

    getHTML() {
        return `<div></div>`
    }


} 