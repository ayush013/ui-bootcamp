export default class Router {

    constructor(routes) {
        this.routes = routes;
        this.outlet = document.getElementById('router-outlet');

        this.initRouteHandler();
    }

    initRouteHandler() {
        this.navigate();

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

        this.outlet.innerHTML = view.getHTML();

        return matchRoute.url;
    }


}