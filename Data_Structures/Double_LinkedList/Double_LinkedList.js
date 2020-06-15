//DOUBLE LINKED LISTS

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let poppedNode = this.tail;
    if (this.head == this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let shiftedNode = this.head;
    if (this.head == this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.push(val);
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let middle = Math.floor(this.length / 2);
    let currentNode;
    let counter;
    if (index <= middle) {
      currentNode = this.head;
      counter = 0;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      currentNode = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }

  set(index, val) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    let setNode = this.get(index);
    if (!setNode) {
      return false;
    }
    setNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    let insertedNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    insertedNode.next = nextNode;
    nextNode.prev = insertedNode;
    prevNode.next = insertedNode;
    insertedNode.prev = prevNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index == 0) {
      return this.shift();
    }
    if (index == this.length - 1) {
      return this.pop();
    }
    let currentNode = this.get(index);
    if (!currentNode) {
      return false;
    }
    let prevNode = currentNode.prev;
    let nextNode = currentNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    currentNode.next = null;
    currentNode.prev = null;
    this.length--;
    return currentNode;
  }

  reverse() {
    let currentNode = this.head;
    let temp;
    while (currentNode) {
      temp = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = temp;
      currentNode = currentNode.prev;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return this;
  }
}

/*
//========================================================\\
\\       ==========         TEST         ==========       //
||                      **        **                      ||
||                           **                           ||
//                  ====================                  \\
\\========================================================//
*/
let list = new DoubleLinkedList();
console.log(list);
list.push(3);
list.push(10);
list.push(8);
list.push(21);
list.push(17);
list.push(5);
//pop()
/* 
  console.log(list.pop());
   console.log(list);
  console.log("==================");
*/

//sifht()
/*
console.log(list.shift());
console.log(list);
console.log("==================");
*/

//unshift(val)
/*
console.log(list.unshift(5));
console.log(list);
*/

//get(index)
/*
console.log(list.get(0));
console.log(list);
*/

//set(index,val)
/*
 console.log(list.set(2, 50));
 console.log(list.get(2));
*/

//insert(index,val)
/*
console.log(list.insert(1, 15));
console.log(list.get(1));
*/

//remove(index)
/*
console.log(list.remove(1));
console.log(list.get(1));
*/

//reverse()
console.log(list.reverse());
