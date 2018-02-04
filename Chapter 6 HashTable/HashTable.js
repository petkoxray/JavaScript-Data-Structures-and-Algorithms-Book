export default class HashTable {
    constructor() {
        this._table = [];
    }

    loseloseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % 37;
    };

    hashCode(key) {
        return this.loseloseHashCode(key);
    };

    add(key, value) {
        let position = this.hashCode(key);

        if (this._table[position] == undefined) {
            this._table[position] = new LinkedList();
        }

        this._table[position].append(new ValuePair(key, value));
    };

    get(key) {
        let position = this.hashCode(key);

        if (this._table[position] !== undefined && !this._table[position].isEmpty()) {
            let current = this._table[position].getHead();

            do {
                if (current.element.key === key) {
                    return current.element.value;
                }

                current = current.next;
            } while (current);
        }

        return undefined;
    };

    remove(key) {
        let position = this.hashCode(key);

        if (this._table[position] !== undefined) {
            let current = this._table[position].getHead();

            do {
                if (current.element.key === key) {
                    this._table[position].remove(current.element);
                    if (this._table[position].isEmpty()) {
                        this._table[position] = undefined;
                    }

                    return true;
                }
                current = current.next;
            } while (current);
        }

        return false;
    };

    print() {
        for (let i = 0; i < this._table.length; ++i) {
            if (this._table[i] !== undefined) {
                console.log(this._table[i].toString());
            }
        }
    };
}

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return '[' + this.key + ' - ' + this.value + ']';
    }
}