import Layout from './app/layout';
import Store from './app/store';
import TodoInput from './app/todo-input';
import './style.scss'

export const loadApp = () => {
    const stateService = new Store();
    const layoutService = new Layout(stateService);
    const todoInputService = new TodoInput(stateService, layoutService);
}

loadApp();