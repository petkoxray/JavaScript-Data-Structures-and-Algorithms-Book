class Dictionary {
    constructor() {
        this._items = {};
    }

    set(key, value) {
        this._items[key] = value;
    };

    delete(key) {
        if (this.has(key)) {
            delete this._items[key];
            return true;
        }

        return false;
    };

    has(key) {
        return this._items.hasOwnProperty(key);
    };

    get(key) {
        return this.has(key) ? this._items[key] : undefined;
    };

    clear() {
        this._items = {};
    };

    get Size() {
        return Object.keys(this._items).length;
    };

    keys() {
        return Object.keys(this._items);
    };

    values() {
        let values = [];

        for (let k in this._items) {
            if (this.has(k)) {
                values.push(this._items[k]);
            }
        }

        return values;
    };

    each(fn) {
        for (let k in this._items) {
            if (this.has(k)) {
                fn(k, this._items[k]);
            }
        }
    };

    getItems() {
        return this._items;
    }
}

module.exports = {Dictionary}