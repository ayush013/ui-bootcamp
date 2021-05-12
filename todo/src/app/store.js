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
            this._store.splice(this._store.indexOf(deleted), 1);
        }
        this.setLocalStore();
    }

    patchTodo(id, value) {
        const node = this.getTodoById(id);
        node.value = value;
        this.setLocalStore();
    }

    changeStatus(id, status) {
        const node = this.getTodoById(id);
        node.done = status;
        this.setLocalStore();
    }

    addTodo(value) {
        this._store.push({
            id: parseInt(Math.random() * 100000, 10),
            value,
            done: false,
        });
        this.setLocalStore();
        return this._store[this._store.length - 1];
    }

    getLocalStore() {
        this._store = JSON.parse(window.localStorage.todo);
    }

    setLocalStore() {
        window.localStorage.todo = JSON.stringify(this._store);
    }

    setStore(data) {
        this._store = data;
        this.setLocalStore();
    }

}
