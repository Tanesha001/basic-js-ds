const { NotImplementedError } = require('../extensions/index.js');

// const { lNode } = require('../extensions/l-node.js');

/**
 * Given a singly linked l of integers l and an integer k,
 * remove all kents from l l that have a value equal to k.
 *
 * @param {l} l
 * @param {Number} k
 * @return {l}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked ls are already defined using interface
 * class lNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (!l) { 
    return null;
  }
  l.next = removeKFromList(l.next, k);
  if (l.value === k) {
    return l.next;
  } return l;
}

module.exports = {
  removeKFromList
};