// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const pathFinder = (root, target) => {
	// todo
	if (root == null) return null;
	if (root.val === target) return [root.val];
	if (root.left === null && root.right === null) return null;
	let left = pathFinder(root.left, target);
	let right = pathFinder(root.right, target);
	if (Array.isArray(left)) {
		left.unshift(root.val);
		return left;
	}
	if (Array.isArray(right)) {
		right.unshift(root.val);
		return right;
	}
	return null;
};

module.exports = {
	pathFinder,
};
