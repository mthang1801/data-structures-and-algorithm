//QUEUE

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = null;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (this.first === this.last) {
      this.last = null;
    }
    let dequeueValue = this.first;
    this.first = this.first.next;
    this.size--;
    return dequeueValue.val;
  }
}

let queue = new Queue();

//enqueue(val)
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(9);
queue.enqueue(7);
queue.enqueue(1);
console.log(queue);

//dequeue()
console.log(queue.dequeue());

console.log(queue);
