export default class Store {

    store;

    constructor() {
        this.initStore();
    }

    getStore() {
        return this.store;
    }

    setItem(cell, value) {
        let row = cell <= 3 ? 0 : cell <= 6 ? 1 : 2;
        let col = (cell - 1) % 3;
        this.store[row][col] = value;
    }

    getItem(cell) {
        let row = cell <= 3 ? 0 : cell <= 6 ? 1 : 2;
        let col = (cell - 1) % 3;
        return this.store[row][col]
    }

    initStore() {
        this.store = new Array(3).fill(null).map(el => new Array(3).fill(null));
    }

}