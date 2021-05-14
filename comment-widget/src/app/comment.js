export default class Comment {

    constructor(title, level) {
        this.title = title;
        this.level = level;
        this.replies = [];
        this.id = parseInt(Math.random() * 100000, 10)
    }

}