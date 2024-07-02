//class Node {
//   constructor(val) {
//     this.val = val;
//    this.left = null;
//    this.right = null;
//  }
//}

const isBinarySearchTree = (root, l = -Infinity, h = Infinity) => {
	if (!root) return true;
	if (root.val < l) return false;
	if (root.val > h) return false;

	if (false === isBinarySearchTree(root.left, l, root.val)) return false;
	if (false === isBinarySearchTree(root.right, root.val, h)) return false;

	return true;
};

module.exports = {
	isBinarySearchTree,
};
