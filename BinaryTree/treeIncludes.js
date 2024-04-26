// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Recursive with logic comparison
const treeIncludes = (root, target) => {
	if (root === null) return false;
	if (root.val === target) return true;

	return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

// iterative
const treeIncludes2 = (root, target) => {
	if (root == null) return false;
	// todo
	const queue = [root];
	while (queue.length > 0) {
		const current = queue.shift();
		if (current.val == target) return true;
		if (current.left) queue.push(current.left);
		if (current.right) queue.push(current.right);
	}

	return false;
};

module.exports = {
	treeIncludes,
};
