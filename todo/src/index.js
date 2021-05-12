import HttpClient from './app/http-client';
import Layout from './app/layout';
import Store from './app/store';
import TodoInput from './app/todo-input';
import './style.scss'

export const loadApp = () => {
    const httpService = new HttpClient();
    const stateService = new Store(httpService);

    const layoutService = new Layout(stateService);
    const todoInputService = new TodoInput(stateService, layoutService);
}

loadApp();