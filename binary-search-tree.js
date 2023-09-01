class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    /** 
     * Iteratively locate where to insert new node with val.
     * 
     * At each step, need to check:
     * 1) if whether val belongs to the left or right; AND
     * 2) whether or not there is already a child node there
     */

    let currentNode = this.root;
    while (currentNode) {
      if (val > currentNode.val) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new Node(val);
          break;
        }
      } else { // val < currentNode.val
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = new Node(val);
          break;
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    if (val < this.root.val) {
      let leftSubTree = new BinarySearchTree(this.root.left);
      this.root.left = leftSubTree.insertRecursively(val).root;
    } else {
      let rightSubTree = new BinarySearchTree(this.root.right);
      this.root.right = rightSubTree.insertRecursively(val).root;
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) return currentNode;
      else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else { // val < currentNode.val
        currentNode = currentNode.left;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return undefined;

    if (this.root.val === val) return this.root;
    else if (this.root.val > val) {
      let leftSubTree = new BinarySearchTree(this.root.left);
      return leftSubTree.findRecursively(val);
    } else { // this.root.val < val
      let rightSubTree = new BinarySearchTree(this.root.right);
      return rightSubTree.findRecursively(val);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    if (!this.root) return;

    let nodesVisited = [this.root.val];

    if (this.root.left) {
      let leftSubTree = new BinarySearchTree(this.root.left);
      let dfsPreOrderLeft = leftSubTree.dfsPreOrder();
      nodesVisited.push(...dfsPreOrderLeft);
    }

    if (this.root.right) {
      let rightSubTree = new BinarySearchTree(this.root.right);
      let dfsPreOrderRight = rightSubTree.dfsPreOrder();
      nodesVisited.push(...dfsPreOrderRight);
    }

    return nodesVisited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    if (!this.root) return;

    let nodesVisited = [];

    if (this.root.left) {
      let leftSubTree = new BinarySearchTree(this.root.left);
      let dfsPreOrderLeft = leftSubTree.dfsInOrder();
      nodesVisited.push(...dfsPreOrderLeft);
    }

    nodesVisited.push(this.root.val);

    if (this.root.right) {
      let rightSubTree = new BinarySearchTree(this.root.right);
      let dfsPreOrderRight = rightSubTree.dfsInOrder();
      nodesVisited.push(...dfsPreOrderRight);
    }

    return nodesVisited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    if (!this.root) return;

    let nodesVisited = [];

    if (this.root.left) {
      let leftSubTree = new BinarySearchTree(this.root.left);
      let dfsPreOrderLeft = leftSubTree.dfsPostOrder();
      nodesVisited.push(...dfsPreOrderLeft);
    }

    if (this.root.right) {
      let rightSubTree = new BinarySearchTree(this.root.right);
      let dfsPreOrderRight = rightSubTree.dfsPostOrder();
      nodesVisited.push(...dfsPreOrderRight);
    }

    nodesVisited.push(this.root.val);

    return nodesVisited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return;

    let nodesVisited = [];
    let nodesToVisit = [this.root];

    while (nodesToVisit.length) {

      let currentNode = nodesToVisit.shift();

      if (currentNode.left) nodesToVisit.push(currentNode.left);
      if (currentNode.right) nodesToVisit.push(currentNode.right);
      
      nodesVisited.push(currentNode.val);
    }

    return nodesVisited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
