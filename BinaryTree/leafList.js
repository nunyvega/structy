// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// Recursive
const leafList = (root) => {
	if (root === null) return [];
	const finality = [];

	leafFinder(root, finality);

	return finality;
};

const leafFinder = (root, finality) => {
	if (root === null) return false;

	if (!root.left && !root.right) finality.push(root.val);
	leafFinder(root.left, finality);
	leafFinder(root.right, finality);
};

// Iterative
const leafList2 = (root) => {
	if (!root) return [];
	const finality = [];
	const stack = [root];

	while (stack.length > 0) {
		const current = stack.pop();
		if (!current.left && !current.right) finality.unshift(current.val);
		if (current.left) stack.push(current.left);
		if (current.right) stack.push(current.right);
	}

	return finality;
};

module.exports = {
	leafList,
};
