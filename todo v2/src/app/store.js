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

        this._store.unshift(note);
        this.setLocalStore();

        return note;
    }

    patchNote(id, title) {
        const note = this._store.find(el => el.id === id);

        if(note) {
            note.title = title;
            this.setLocalStore();
            return true;
        }

        return false
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
        if (this._store.length) {
            localStorage.setItem('todos', JSON.stringify(this._store));
        }
    }
}