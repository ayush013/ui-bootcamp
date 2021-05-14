import Comment from "./comment";

export default class Store {
    constructor() {
        this._store = [];
        this.getLocalStore();
    }

    get comments() {
        return this._store;
    }

    saveComment(comment, id = 0) {
        let newNode;

        if (id) {
            const parent = this.findComment(id);
            newNode = new Comment(comment, parent.level + 1);
            parent.replies.push(newNode);
        } else {
            newNode = new Comment(comment, 0);
            this._store.push(newNode);
        }

        this.setLocalStore();
        return newNode;
    }

    findComment(id, comments = this.comments) {

        for (let comment of comments) {
            console.log(comment.id, id)
            if (comment.replies.length) {
                const result = this.findComment(id, comment.replies);
                if(result !== -1) {
                    return result;
                }
            }
            if (comment.id === id) {
                return comment;
            }
        }
        return -1;
    }

    getLocalStore() {
        if (window.localStorage.comments) {
            this._store = JSON.parse(window.localStorage.comments);
        }
    }

    setLocalStore() {
        window.localStorage.comments = JSON.stringify(this._store);
    }

}