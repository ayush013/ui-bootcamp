export default class Store {

    constructor() {
        this._store = [];
        this.getLocalStore();
    }

    saveToStore(data) {
        this._store.push({ ...data, id: parseInt(Math.random() * 10000, 10), status: 0 });
        this.setLocalStore();
    }

    getLocalStore() {
        if (window.localStorage.getItem('tasks')) {
            this._store = JSON.parse(window.localStorage.getItem('tasks'));
        }
    }

    setLocalStore() {
        window.localStorage.setItem('tasks', JSON.stringify(this._store));
    }

    getAllTasks() {
        return this._store;
    }

    getTaskById(id) {
        return this._store.find(el => el.id === id);
    }

    patchStatus(id, status) {
        const node = this.getTaskById(id);
        node ? node.status = status : '';
        this.setLocalStore();
    }

}