export default class Queue<T>
{
    private items: Array<T>;
    
    constructor() {
        this.items = Array<T>();
    }

    dequeue(): T {
        if (this.isEmpty()) {
            throw new RangeError("Stack is empty!");
        }

        return this.items.shift()
    }

    enqueue(element: T): void {
        this.items.push(element);
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    get size(): number {
        return this.items.length;
    }

    front(): T {
        if (this.isEmpty()) {
            throw new RangeError("Stack is empty!");
        }

        return this.items[0];
    }

    clear(): void {
        this.items = Array<T>();
    }

    print(): void {
        console.log(this.items.toString());
    }
}

let q = new Queue<string>();
q.enqueue("pesho");
q.enqueue("gosho");
q.print();