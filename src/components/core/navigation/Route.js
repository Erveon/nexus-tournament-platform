export default class Route {
    constructor(route, label, icon, level) {
        this._route = route;
        this._label = label;
        this._icon = icon;
        this._level = level || 0;
    }
    get route() { return this._route; }
    get label() { return this._label; }
    get icon() { return this._icon; }
    get level() { return this._level; }
};