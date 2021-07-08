export default class Model {
    constructor() {
        this._events = []

        this.getLocalStore();
    }


    get events() {
        return this._events;
    }


    setLocalStore() {
        if (this._events.length) {
            localStorage.setItem('events', JSON.stringify(this._events))
        }
    }

    getEventsById(id) {
        return this._events.find(ev => ev.id === id);
    }

    getLocalStore() {
        const events = localStorage.getItem('events');

        try {
            if (events) {
                this._events = JSON.parse(events);
            }
        } catch {
            console.error(e);
        }
    }

    setEvent({ id, name, desc }) {
        const eventsOnId = this.getEventsById(id);

        if (eventsOnId) {
            eventsOnId.events.push({ name, desc })
        } else {
            this._events.push({ id, events: [{ name, desc }] });
        }
    }

}
