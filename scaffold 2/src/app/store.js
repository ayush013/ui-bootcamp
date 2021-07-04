export default class Store {
    constructor() {
        this._store = [];
        this.getLocalStore();
    }

    get allNotes() {
        return this._store;
    }

    setStore(state) {
        this._store = state;
    }

    addNote(title) {
        const note = {
            title,
            id: Math.round(Math.random() * 100000),
            done: false
        }

        this._store.push(note);
        this.setLocalStore();

        return note;
    }

    getLocalStore() {
        const localStore = localStorage.getItem('todos');

        try {
            if (localStore) {
                const data = JSON.parse(localStore)
                this.setStore(data);
            }
        } catch (e) {
            console.error(e)
        }
    }

    setLocalStore() {
        if(this._store.length) {
            localStorage.setItem('todos', JSON.stringify(this._store));
        } 
    }
}