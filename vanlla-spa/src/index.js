import Router from './app/router';
import About from './app/views/About';
import Home from './app/views/Home';
import Settings from './app/views/Settings';
import './style.scss'

const ROUTES = [
    { url: '/', view: Home },
    { url: '/about', view: About },
    { url: '/settings', view: Settings },
];


export const loadApp = () => {

        new Router(ROUTES);

}

loadApp();