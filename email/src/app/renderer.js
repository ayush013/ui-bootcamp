import View from "./view";

export default class Renderer {
    constructor() {
        this.viewService = new View();

        const render = this.viewService.debounceRenderView(100);

        this.store = new Proxy([], {
            set: (target, prop, val) => {
                target[prop] = val;
                render(target);
                return true;
            }
        });

        this.viewService.onListItemClick((id) => {
            const activeIdx = this.store.findIndex((el) => {
                return el.id === parseInt(id.split('-').pop(), 10)
            })
            render(this.store, activeIdx);
        })

    }

    setState(items) {
        this.store.push(...items);
    }

}