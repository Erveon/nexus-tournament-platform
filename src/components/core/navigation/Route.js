export default class Route {
    constructor(route, label) {
        this._route = route;
        this._label = label;
    }
    get route() { return this._route; }
    get label() { return this._label; }
};