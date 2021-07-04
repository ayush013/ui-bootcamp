import View from "./view";

export default class Renderer {
    constructor() {
        this.viewService = new View();

        const render = this.viewService.debounceRenderView(500);

        this.store = new Proxy([], {
            set: (target, prop, val) => {
                target[prop] = val;
                render(target);
                return true;
            }
        });
        
    }

    setState(items) {
        this.store.push(...items);
    }

} 