import HttpClient from './app/http-client';
import Renderer from './app/renderer';
import './style.scss'

export const loadApp = async () => {
    const renderer = new Renderer();
    const httpService = new HttpClient();

    const emails = await httpService.getEmail();

    renderer.setState(emails);
}

loadApp();