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
            newNode = new Comment(comment, parent.level + 1, id);
            parent.replies.push(newNode);
        } else {
            newNode = new Comment(comment, 0, '');
            this._store.push(newNode);
        }

        this.setLocalStore();
        return newNode;
    }

    deleteComment(id) {
        const parent = this.findComment(id).parent;

        if (parent) {
            const comments = this.findComment(parent);
            const idx = comments.replies.findIndex(el => el.id === id);
            comments.replies.splice(idx, 1);
        } else {
            const idx = this.comments.findIndex(el => el.id === id);
            this.comments.splice(idx, 1);
        }

        this.setLocalStore();
    }

    findComment(id, comments = this.comments) {

        for (let comment of comments) {
            if (comment.replies.length) {
                const result = this.findComment(id, comment.replies);
                if (result !== -1) {
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