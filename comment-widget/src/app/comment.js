export default class Comment {

    constructor(title, level, parent) {
        this.title = title;
        this.level = level;
        this.replies = [];
        this.id = parseInt(Math.random() * 100000, 10);
        this.parent = parent;
    }

}