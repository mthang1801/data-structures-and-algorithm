//STACK
//extends Singly Linked List

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    const firstNode = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return firstNode.val;
  }
}

let stack = new Stack();

//push(val)
stack.push(5);
stack.push(3);
stack.push(7);
stack.push(9);
stack.push(6);

//pop()
console.log(stack.pop());
console.log(stack);
