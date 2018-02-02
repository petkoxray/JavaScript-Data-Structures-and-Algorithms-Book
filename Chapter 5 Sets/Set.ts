export default class Set<T> {
    private items: Array<T>;

    constructor() {
        this.items = new Array<T>(0);
    }

    has(element: T): boolean {
        return this.items.indexOf(element) !== -1;
    }

    add(element: T): boolean {
        if (this.has(element)) {
            return false;
        }

        this.items.push(element);
        return true;
    }

    get(element: T): T {
        let index = this.items.indexOf(element);

        if (index > -1) {
            return this.items[index];
        }

        return null;
    }

    delete(element: T): boolean {
        let index = this.items.indexOf(element);

        if (index > -1) {
            this.items.splice(index, 1);

            return true;
        }

        return false;
    }

    clear(): void {
        this.items = new Array<T>(0);
    }

    get size(): number {
        return this.items.length;
    }

    values(): Array<T> {
        return this.items;
    }

    union(setB: Set<T>): Set<T> {
        let unionSet = new Set<T>();

        setB.values().forEach((el) => {
            unionSet.add(el);
        });

        this.values().forEach(el => {
            unionSet.add(el);
        });

        return unionSet;
    }

    intersection(set: Set<T>): Set<T> {
        let intersectedSet = new Set<T>();

        this.values().forEach(el => {
            if (set.has(el)) {
                intersectedSet.add(el);
            }
        });

        return intersectedSet;
    }

    toString(): string {
        return this.items.join(" ");
    }
}

let setA = new Set<number>();
let setB = new Set<number>();
setA.add(5);
setA.add(6);
setA.add(5);
setA.add(10);
setB.add(10);
setB.add(5);
setB.add(3);
setA.add(10);
// let unionSet = setB.union(setA);
// console.log(setA);
// console.log(setB);
// console.log(unionSet);
// let intersecected = setB.intersection(setA);
// console.log(intersecected);
// console.log(setA);
// console.log(setB);
