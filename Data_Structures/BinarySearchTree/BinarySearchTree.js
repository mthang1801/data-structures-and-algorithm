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
}

let tree = new BinarySearchTree();
//insert(val)
//        10
//     5          13
//  2         12       18
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(18);
tree.insert(12);
tree.insert(1);
tree.insert(6);

//find(val)
console.log(tree);
console.log("=====================");
console.log(tree.find(10));
