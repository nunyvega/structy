// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Recursive
const allTreePaths = (root) => {
	if (root === null) return false;
	let leftResult = allTreePaths(root.left);
	let rightResult = allTreePaths(root.right);
	leftResult && leftResult.forEach((arr) => arr.unshift(root.val));
	rightResult && rightResult.forEach((arr) => arr.unshift(root.val));

	if (leftResult && rightResult) return [...leftResult, ...rightResult];
	if (leftResult) return leftResult;
	if (rightResult) return rightResult;
	return [[root.val]];
};

module.exports = {
	allTreePaths,
};
