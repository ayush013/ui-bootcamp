export default class Store {

    constructor() {
        this.events = [];
        this.getEventStore();
    }

    getEventStore() {
        if (window.localStorage.events) {
            this.events = JSON.parse(window.localStorage.events);
        }
    }

    setStore() {
        window.localStorage.events = JSON.stringify(this.events);
    }

    saveEvent(timestamp, title, description) {
        this.events.push({ timestamp, title, description });
        this.setStore();
    }

}
