import HttpClient from './app/http-client';
import Layout from './app/layout';
import Store from './app/store';
import TodoInput from './app/todo-input';
import './style.scss';

export const loadApp = async () => {
    const httpService = new HttpClient();
    const stateService = new Store();

    if (window.localStorage.todo) {
        stateService.getLocalStore();
    } else {
        const data = await httpService.getAllTodos();
        stateService.setStore(data);
    }

    const layoutService = new Layout(stateService);
    const todoInputService = new TodoInput(stateService, layoutService);
};


loadApp();
