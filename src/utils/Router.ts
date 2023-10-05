import Block from "./Block";
import Route from "./Route";

class Router {
    private static __instatnce: Router;
    private routes: Route[] = [];
    private _history = window.history;
    private _currentRoute: Route | null = null;

    constructor(private readonly _rootQuery: string) {
        if (Router.__instatnce) {
            return Router.__instatnce;
        }

        Router.__instatnce = this;
    }

    public use(pathname: string, block: typeof Block): this {
        const route = new Route(pathname, block, this._rootQuery);
        this.routes.push(route);
        return this;
    }

    start(): void {
        window.onpopstate = (e: PopStateEvent): void => {
            this._onRoute((e.currentTarget as Window).location.pathname);
        };
        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string): void {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }
        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render();
    }

    go(pathname: string): void {
        this._history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back(): void {
        this._history.back();
    }

    forward(): void {
        this._history.forward();
    }

    getRoute(pathname: string): Route | undefined {
        return this.routes.find(route => route.match(pathname));
    }
}

export default Router;