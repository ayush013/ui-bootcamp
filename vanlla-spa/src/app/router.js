export default class Router {

    constructor(routes) {
        this.initRouteHandler();
        this.routes = routes;
    }

    initRouteHandler() {
        document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                e.preventDefault();
                history.pushState(null, null, e.target.href);
                this.navigate();
            }
        });

        window.addEventListener('popstate', this.navigate.bind(this))
    }

    navigate() {
        let matchRoute = this.routes.find(route => route.url === location.pathname);
        if (!matchRoute) {
            matchRoute = this.routes[0];
        }

        const view = new matchRoute.view();

        return matchRoute.url;
    }


}