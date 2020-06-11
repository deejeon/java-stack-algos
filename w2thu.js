// Daniel, Sam, Vardges

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack { // FILO
    constructor() {
        this.head = null;
    }

    // using only one extra stack for storage, check if this stack is sorted
    // return the stack back to it's original order when you are done
    // assume numerical inputs (integers)
    isSorted(){
        if (this.head === null) return true;
        if (this.head.next === null) return true;
        let isSorted = true;
        let newStack = new Stack();
        while (this.head) {
            let removed = this.pop();
            newStack.push(removed);
            if (this.head && removed.data > this.head.data) {
                isSorted = false;
                break;
            }
        }
        while (newStack.head) {
            this.push(newStack.pop());
        }
        return isSorted;
    }

    push(newNode) {
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    pop() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;
        removed.next = null;

        return removed;
    }

    peek() {
        return this.head ? this.head.data : null;
    }

    isEmpty() {
        let isEmpty = this.head === null;
        return isEmpty;
    }
}

class Queue { // FIFO
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    // reverse a queue using only one stack as additional storage
    queueReverse(){
        if (this.front === null) return this;
        if (this.front.next === null) return this;
        let temp = new Stack();
        while (this.front) {
            temp.push(this.dequeue());
        }
        while (temp.head) {
            this.enqueue(temp.pop());
        }
        return this;
    }

    compareQueues(queue){
        if(this.length !== queue.length){
            return false;
        }
        var count = 0;
        var isEqual = true;
        let len = this.length;

        while(count < len){
            const dequeue1 = this.dequeue();
            const dequeue2 = queue.dequeue();

            if(dequeue1.data !== dequeue2.data){
                isEqual = false;
            }

            this.enqueue(dequeue1);
            queue.enqueue(dequeue2);
            count++;
        }

        return isEqual;
    }

    queueIsPalindrome(){
        var isPalindrome = true;
        var stack = new Stack();
        var len = this.length;

        for(var i = 0; i < len; i++){
            var node = this.dequeue();
            stack.push(node);
            this.enqueue(node);
        }

        for(var i = 0; i < len; i++){
            var dequeued = this.dequeue();
            var popped = stack.pop();

            if(popped.data !== dequeued.data){
                isPalindrome = false;
            }

            this.enqueue(dequeued);
        }
        return isPalindrome;
    }

    enqueue(node){
        if(this.rear === null){
            this.rear = node;
            this.front = node;
            this.length++;
        }else{
            this.rear.next = node;
            this.rear = node;
            this.length++;
        }
    }
    dequeue(){
        if(this.front === null){
            this.length--;
            return null;
        };
        if(this.front === this.rear){
            this.rear = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        this.length--;
        return node;
    }
    checkFront(){
        return this.front ? this.front.data : null;
    }
    isEmpty(){
        return this.front === null;
    }
}



// Bonus: nextQueue

// design a new queue class that holds two queues

// every third dequeued node gets enqueued into the 'next' queue

// think of a security queue where every third person is sent
// to an additional security check.

// the nextQueue should implement
// .front
// .rear
// .length
// .nextQueue, where .nextQueue is a regular Queue class

// class nextQueue {
//     constructor() {
//         this.front = null;
//         this.rear = null;
//         this.length = 0;
// this.dequeu
//         this.nextQueue = new Queue();
//     }

//     enqueue(node){
//     if  (this.front === null){
//         this.front = this.rear = node;
//         length++;
//     }
//     else{
//         this.rear.next = node;
//         this.rear = this.rear.next;
//         if (this.length%3 === 0){
//             nextQueue.enqueue(node);
//         }
//     }


// }

// enqueue(node)
// dequeue() / grab every third node and enqueue in nextQueue
// checkFront()
// isEmpty()

// because .next is just a Queue, all previous
// queue interfaces will already be accessible
// through this.nextQueue.enqueue(node) etc etc