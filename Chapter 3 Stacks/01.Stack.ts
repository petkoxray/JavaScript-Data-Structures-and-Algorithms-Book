class Stack<T> {
    private items: Array<T>;

    constructor() {
        this.items = Array<T>();
    }

    push(element: T): void {
        this.items.push(element);
    }

    pop(): T {
        if (this.isEmpty()) {
            throw new RangeError("Stack is empty!");
        }

        return this.items.pop();
    }

    peek(): T {
        if (this.isEmpty()) {
            throw new RangeError("Stack is empty!");
        }

        return this.items[this.size() - 1];
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = Array<T>();
    }

    print(): void {
        console.log(this.items.toString());
    }
}

export default Stack;

// let stack = new Stack<number>();

// stack.push(10);
// stack.push(20);
// stack.push(130);
// stack.push(100);

// console.log(stack.isEmpty());
// console.log("--------");
// console.log(stack.peek());

// stack.print();
// stack.pop();

// console.log(stack.isEmpty());
// stack.print();

// stack.pop();
// stack.pop();
// stack.print();
// stack.push(130);
// stack.push(100);
// stack.print();
// stack.clear();
// stack.print();

// console.log(stack.size());

