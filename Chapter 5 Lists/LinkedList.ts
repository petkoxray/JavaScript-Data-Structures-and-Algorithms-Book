class LinkedList<T> {
    private head: null | ListNode<T>;
    private count: number;

    constructor() {
        this.head = null;
        this.count = 0;
    }

    AddLast(value: T): void {
        if (this.head === null) {
            this.head = new ListNode<T>(value);
        } else {
            let currentNode = this.head;

            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            currentNode.next = new ListNode<T>(value);
        }

        this.count++;
    }

    AddFirst(value: T): void {
        let newNode = new ListNode<T>(value);
        newNode.next = this.head;
        this.head = newNode;

        this.count++;
    }

    RemoveAt(position: number): T {
        if (position > -1 && position < this.count) {

            let current = this.head,
                previous,
                index = 0;

            if (position === 0) {
                this.head = this.head.next;
            } else {
                while (++index <= position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }

            this.count--;

            return current.value;
        } else {
            throw new RangeError("Invalid index");
        }

    }

    RemoveFirst(): T {
        if (this.isEmpty()) {
            throw new RangeError("List is empty!");
        }

        return this.RemoveAt(0);
    }

    RemoveLast(): T {
        if (this.isEmpty()) {
            throw new RangeError("List is empty!");
        }

        return this.RemoveAt(this.count - 1);
    }

    get Count(): number {
        return this.count;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    indexOf(value: T): number {
        let current = this.head,
            index = 0;

        while (current) {
            if (value === current.value) {
                return index;
            }

            index++;
            current = current.next;
        }

        return -1;
    }

    forEach = (func) => {
        let cur = this.head;
        while (cur) {
            func(cur.value);
            cur = cur.next;
        }
    }

    ToArray(): Array<T> {
        let arr = new Array<T>(this.count);
        let index = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            arr[index++] = currentNode.value;
            currentNode = currentNode.next;
        }

        return arr;
    }
}

class ListNode<T> {
    public next: ListNode<T> | null;

    constructor(public value: T) {
        this.next = null;
    }
}

let ll = new LinkedList<string>();

ll.AddLast("migsho");
ll.AddLast("gosho");
ll.AddLast("pesho");
ll.AddFirst("dido");
// console.log(ll.RemoveFirst());
// console.log(ll.RemoveLast());
// console.log(ll.ToArray());
// console.log(ll.indexOf("gdosho"));
// console.log(ll.ToArray());
ll.forEach((el) => {
    console.log(el);
});