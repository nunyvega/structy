// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const flipTree = (root) => {
	if (root == null) return;

	const temp = root.left;
	root.left = root.right;
	root.right = temp;

	flipTree(root.left);
	flipTree(root.right);
	return root;
};

module.exports = {
	flipTree,
};
