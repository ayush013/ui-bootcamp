import View from './app/views'
import './style.scss'

export const loadApp = () => {

    const viewService = new View();

    const createState = (state) => new Proxy(state, {
        set: (state, prop, value) => {
            state[prop] = value;

            viewService.outputResult(state);

            return true;
        }
    });


    const state = createState({
        result: ''
    });

    viewService.initInputListener(e => {
        state.result = e.target.value;
    });


}

loadApp();