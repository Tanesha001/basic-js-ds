const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.roott = null;
  }

  root() {
    return this.roott;
  }

  add(data) {
    this.roott = addWithin(this.roott, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
   return searchWithin(this.roott, data);

   function searchWithin(node, data) {
    if (!node) {
      return false;
    }

    if (node.data === data) {
      return true;
    }

    return data < node.data ?
      searchWithin(node.left, data) :
      searchWithin(node.right, data);
   }
  }

  find(data) {
    if (this.roott === null) {
      return null;
    }
    let node = this.roott;
    if (node.data === data) {
      return node;
    } else {
        while (node)
          if (node.data === data) return node;
          else {
            if (data < node.data)
              node = node.left;
            else node = node.right;
          }
    }
    return null;
  }

  remove(data) {
    this.roott = removeNode(this.roott, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.roott) {
      return;
    }

    let node = this.roott;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.roott) {
      return;
    }

    let node = this.roott;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};