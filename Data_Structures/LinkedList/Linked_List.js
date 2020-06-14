//LINKED LIST

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    while (current) {
      if (current.next == this.tail) {
        current.next = null;
        this.tail = current;
        break;
      }
      current = current.next;
    }

    this.length--;
    if (this.length == 0) {
      this.head = this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    this.head = current.next;

    this.length--;
    if (this.length == 0) {
      this.head = this.tail = null;
    }
    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let i = 0;
    let current = this.head;
    while (i < index && current) {
      current = current.next;
      i++;
    }
    return current;
    // let counter = 0;
    // let current = this.head;
    // while (counter !== index) {
    //   current = current.next;
    //   counter++;
    // }
    // return current;
  }

  set(index, val) {
    let foundIndex = this.get(index);
    if (foundIndex) {
      foundIndex.val = val;
      return true;
    }
    return false;
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
    let insertNode = new Node(val);
    let prevNode = null;
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }
    // let prevNode = this.get(index - 1);
    // let currentNode = prevNode.next;
    prevNode.next = insertNode;
    insertNode.next = currentNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    let nextNode = removed.next;
    prevNode.next = nextNode;
    this.length--;
    return true;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next,
      prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

/*
//========================================================\\
\\       ==========         TEST         ==========       //
||                           **                           ||
||                     **          **                     ||
//                  ====================                  \\
\\========================================================//
*/
let list = new LinkedList();
console.log(list);
list.push("a");
console.log(list);
console.log("====================");

list.push("b");
console.log(list);
console.log("====================");

list.push("c");
console.log(list);
console.log("====================");

list.push("d");
console.log(list);
console.log("====================");

list.push("e");
console.log(list);
console.log("====================");

list.push("f");
console.log(list);
console.log("====================");

//Shift and unshift

// list.unshift("mvt");
// console.log(list);
// console.log("====================");

// list.shift();
// console.log(list);
// console.log("====================");

console.log("-------------------------------------------------");
//Get
// console.log("GET");
// console.log(list.get(2));

//Set
// console.log("SET");
// console.log(list.set("Elon Musk", 2));
// console.log(list.get(2));

//Insert
// console.log("INSERT");
// console.log(list.insert(2, "SpaceXX"));

//Remove
// list.remove(1);
// console.log(list);
// console.log(list.get(1));

//Reverse
console.log(list.reverse());
console.log(list);
