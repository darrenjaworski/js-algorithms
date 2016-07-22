// A binary search tree (BST) is a binary tree where each node
// has a Comparable key (and an associated value) and satisfies the restriction
// that the key in any node is larger than the keys in all nodes in that node’s left subtree
// and smaller than the keys in all nodes in that node’s right subtree.
//
// We are working with data structures made up of nodes that contain links that are either
// null or references to other nodes.
// In a binary tree, we have the restriction that every node is pointed to by just one other node,
// which is called its parent (except for one node, the root,
// which has no nodes pointing to it), and that each node has exactly two links,
// which are called its left and right links, that point to nodes called its left child and right child, respectively.
// Although links point to nodes, we can view each link as pointing to a binary tree,
// the tree whose root is the referenced node.
//
// Heavily relied on https://github.com/nzakas/computer-science-in-javascript/blob/master/data-structures/binary-search-tree/binary-search-tree.js

function BinarySearchTree() {
  this._root = null;
}

binarySearchTree.prototype = {
  constructor: BinarySearchTree,
  add: function() {

  },
  contains: function(value) {

  },
  remove: function(value) {

  },
  size: function() {

  },
  toArray: function() {

  },
  toString: function() {

  },
  traverse: function() {

  }

};
