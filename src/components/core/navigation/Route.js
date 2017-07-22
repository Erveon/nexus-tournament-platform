export default class Route {
    constructor(route, label, icon) {
        this._route = route;
        this._label = label;
        this._icon = icon;
    }
    get route() { return this._route; }
    get label() { return this._label; }
    get icon() { return this._icon; }
};