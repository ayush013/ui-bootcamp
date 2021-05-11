export default class Store {
    constructor() {
        this._store = [];
        this.getLocalStore();
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
        this.setStore();
    }

    patchTodo(id, value) {
        const node = this.getTodoById(id);
        node.value = value;
        this.setStore();
    }

    addTodo(value) {
        this._store.push({ id: this._store.length + 1, value });
        this.setStore();
        return this._store[this._store.length - 1];
    }

    getLocalStore() {
        if (window.localStorage.todo) {
            this._store = JSON.parse(window.localStorage.todo)
        }
    }

    setStore() {
        window.localStorage.todo = JSON.stringify(this._store);
    }
}