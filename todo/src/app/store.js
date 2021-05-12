export default class Store {
    constructor(httpService) {
        this._store = [];
        this.httpService = httpService;
        this.getStore();
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
        this.setStore();
    }

    patchTodo(id, value) {
        const node = this.getTodoById(id);
        node.value = value;
        this.setStore();
    }

    changeStatus(id, status) {
        const node = this.getTodoById(id);
        node.done = status;
        this.setStore();
    }

    addTodo(value) {
        this._store.push({ id: parseInt(Math.random() * 100000, 10), value, done: false });
        this.setStore();
        return this._store[this._store.length - 1];
    }

    async getStore() {
        if (window.localStorage.todo) {
            this._store = JSON.parse(window.localStorage.todo)
        } else {
            this._store = await this.httpService.getAllTodos();
            this.setStore();
        }
    }

    setStore() {
        window.localStorage.todo = JSON.stringify(this._store);
    }

}