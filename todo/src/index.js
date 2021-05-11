import Store from './app/store';
import TodoInput from './app/todo-input';
import './style.scss'

export const loadApp = () => {
    const stateService = new Store();
    const todoInputService = new TodoInput(stateService);
}

loadApp();