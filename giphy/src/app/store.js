export default class Store {
    constructor() {
        this._store = [];
    }

    getStore() {
        return this._store;
    }

    clearStore() {
        this._store = [];
    }

    setStore(data) {
        this._store.push(...data);
    }

    transformData(data) {
        return data.map(el => {
            return {
                url: el.images.fixed_height.url,
                id: el.id,
                link: el.url,
                title: el.title
            }
        });
    }

}