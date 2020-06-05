// Gabe, Brady

class SLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    reverse(){
        let previous = this.head;
        let runner = previous.next;
        let leader = runner;
        while(runner){
            leader = leader.next;
            runner.next =previous;
            previous = runner;
            runner = leader;
        }
        this.head.next = null;
        this.head = previous;
    }
    
    // reverse the order of a singly linked list.
    
    // if the order is head -> 1 -> 2 -> 3 -> null
    // the result will be head -> 3 -> 2 -> 1 -> null
    
    // first solve this any way that you can, possibly using
    // a different data structure as storage
    
    // once you have a working solution, how could you refactor
    // your code to only traverse the list once?
    
    
    nthToLast(n){
        let length = 0;
        let runner = this.head;
        while(runner){
            runner = runner.next;
            length++;
        }
        let i = 0;
        if(n>length){
            console.log("out of bounds");
            return null;
        }
        let outNode = this.head;
        while(i<length-n){
            outNode = outNode.next;
            i++;
        }
        return outNode;
    }
    // return the nth to the last node. assume you do not have a count() method
    // first get a working solution
    
    // assume n is within range of the list
    
    // once you solve it, how could you refactor your code to only
    // traverse the list one time?

    //iterate the linked list and print the value of every node
    display(){
        if (this.head === null) {
            console.log(" im gonna go with list is empty, dawg");
            return;
        }
        let runner=this.head;
        while(runner!==null) {
            console.log(runner.data);
            runner = runner.next;
        }
        return;
    }

    //if data is contained within the current list, remove it.
    //consider edge cases of head node, last node, and middle nodes
    delete(data) {
        if(this.head===null){//head empty
            console.log("list is empty");
            return;
        }
        if (!this.contains(data)) return;
        let runner = this.head;
        if (runner.data === data){//head
            this.head = runner.next;
            return;
        }
        while(runner.next != null){
            if (runner.next.data === data){//mid
                runner.next=runner.next.next;
                return;
            }
            runner = runner.next;
        }
    }

    addToFront(node){
        if(this.isEmpty()){
            this.head = node;
            this.length++;
            return;
        };

        node.next = this.head;
        this.head = node;
        this.length++;
        return;
    }

    isEmpty(){
        if(this.head){
            return false;
        }
        return true;
    }

    addToBack(node){
        // create a runner at the head
        let runner = this.head;

        // check if the runner is null, meaning our list is headless
        if(runner === null){
            this.head = node;
            this.length++;
            return
        }

        // "10" == 10 yes
        // "10" === 10 no

        // start while looping
        while(runner){
            // check if the next node is null
            if(runner.next === null){
                // if so, add here and return
                runner.next = node;
                this.length++;
                return
            }
            // if not, advance runner
            runner = runner.next;
        }
    }

    contains(value){
        // start at the head
        var runner = this.head;

        // while we have a runner
        while(runner){

            // return true if data === value
            if(runner.data === value){
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        return false;
    }

    recursiveContains(current, value){
        // if you didn't pass current, current should be the head
        if(current === undefined) current = this.head;

        // if current is null, return false up the call stack
        if(current === null) return false;

        // if runner.data === value, return true up the call stack
        if(runner.data === value) return true;

        // otherwise return the result of contains for current.next
        return this.recursiveContains(current.next, value);
    }

    // remove and return the first node from the list or null
    removeHead(){
        if(this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        this.length--;
        return removed;
    }

    // remove head and return the value of that node or null
    removeHeadValue(){
        if(this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        this.length--;
        return removed.value;
    }

    // remove and return the last node from the list or null
    removeBack(){
        if(this.isEmpty()) return null;
        if(this.head.next === null){
            return this.removeHead();
        }
        var current = this.head.next;
        var prev = this.head;
        while(current){
            if(current.next === null){
                prev.next = null;
                this.length--;
                return current;
            }
            prev = current;
            current = current.next;
        }
    }

    // bonus challenge:
    // return the average of all values in an interger SLL
    average(){
        if (this.head === null) return 0;
        var sum = 0;
        var temp = this.head;
        while (temp !== null){
            sum += temp.data;
            temp = temp.next;
        }
        return (sum / this.length);
    }

    // get the value of the middle node if there is one
    getMiddleData(){
        if (this.head === null) return null;
        if (this.length % 2 === 1) {
            var temp = this.head;
            var count = 0;
            var target = (this.length + 1) / 2;
            while (temp !== null) {
                count++;
                if (count === target) return temp.data;
            }
        }
    }

    count(){}
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// make new SLL
var mySLL = new SLL();

// should return true because new SLL is empty
// console.log(mySLL.isEmpty());

// create and add new node to front
var firstNode = new Node(7);
mySLL.addToFront(firstNode);

var firstNodeCopy = new Node(7);
mySLL.addToFront(firstNodeCopy);
// console.log(mySLL);

// create and add more nodes to front
var newFirstNode = new Node(8);
mySLL.addToFront(newFirstNode);
var anotherFirstNode = new Node(9);
mySLL.addToFront(anotherFirstNode);
// console.log(mySLL);

// create and add node to back
var newLastNode = new Node(1);
mySLL.addToBack(newLastNode);
console.log(mySLL);

// check if SLL contains node with data value of 7; should return true
var contains7 = mySLL.contains(7);
console.log(contains7); // should be true

//Check if the removeBack works
// console.log(mySLL.removeHeadValue());
// console.log(mySLL.removeBack().data);
// mySLL.display();

// console.log(mySLL.average());

var newSLL = new SLL();
// console.log(newSLL.average());

mySLL.delete(7);
mySLL.display();

newSLL.delete(1);
newSLL.display();