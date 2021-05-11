export default class Store {
    constructor() {
        this._store = [];
    }

    getTodoById(id) {
        return this._store.find((el) => el.id === id);
    }

    getAllTodo() {
        return this._store;
    }

    deleteTodo(id) {
        const deleted = this.getTodoById(id);
        if (deleted) {
            this._store.splice(deleted.id, 1);
        }
    }

    addTodo(value) {
        this._store.push({ id: this._store.length + 1, value });
    }
}