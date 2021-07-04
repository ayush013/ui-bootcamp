const ROUTES = [
    { url: '/', view: () => console.log('home') },
    { url: '/about', view: () => console.log('about') },
    { url: '/settings', view: () => console.log('settings') },
];

export default class Router {

    constructor() {
        this.initRouteHandler();
    }

    initRouteHandler() {
        document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                e.preventDefault();
                history.pushState(null, null, e.target.href);
                this.navigate();
            }
        })
    }

    navigate() {
        let matchRoute = ROUTES.find(route => route.url === location.pathname);
        if (!matchRoute) {
            matchRoute = ROUTES[0];
        }

        matchRoute.view();

        return matchRoute.url;
    }


}