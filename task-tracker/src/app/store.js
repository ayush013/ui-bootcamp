export default class Store {
    constructor() {
        this._store = [];
        this.getLocalStore();
    }

    saveToStore(data) {
        this._store.push({ ...data, id: Math.random() * 10000 });
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

    getStore() {
        return this._store;
    }
}