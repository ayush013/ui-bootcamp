import Router from './app/router';
import './style.scss'

const ROUTES = [
    { url: '/', view: () => console.log('home') },
    { url: '/about', view: () => console.log('about') },
    { url: '/settings', view: () => console.log('settings') },
];


export const loadApp = () => {
    new Router(ROUTES);
}

loadApp();