//BINARY SEARCH TREE

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.val > val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    while (current) {
      if (current.val == val) {
        return current;
      } else if (current.val > val) {
        if (!current.left) {
          return false;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          return false;
        } else {
          current = current.right;
        }
      }
    }
  }

  contains(val) {
    return !!this.find(val);
  }

  BFS() {
    let node = this.root,
      queue = [],
      data = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSpostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }
  DFSinOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();
//insert(val)
//         10
//      5         13
//   2     6   12    18
// 1   3     7
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(18);
tree.insert(12);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(7);

//find(val)
/*
console.log(tree);
console.log("=====================");
console.log(tree.find(10));
*/

//Breadth First Search
//[ 10,  5, 13, 2,6, 12, 18, 1]
// console.log(tree.BFS());

//Deepth First Search order
//[10,5,2,1,3,6,7,13,12,18]
console.log(tree.DFSreOrder());

//Deepth First Search post Order
//[1,3,2,7,6,5,12,18,13,10]
console.log(tree.DFSpostOrder());

//Deepth First Search In Order
//[1,  2,  3,  5,  6, 7, 10, 12, 13, 18]
console.log(tree.DFSinOrder());
