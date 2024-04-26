// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Recursive
const depthFirstValues = (root) => {
	if (root === null) return [];

	const leftValues = depthFirstValues(root.left);
	const rightValues = depthFirstValues(root.right);

	return [root.val, ...leftValues, ...rightValues];
};

// Iterative
const depthFirstValues2 = (root) => {
	// todo
	if (root === null) return [];
	const stack = [root];
	const values = [];

	while (stack.length > 0) {
		const current = stack.pop();
		values.push(current.val);

		if (current.right) {
			stack.push(current.right);
		}

		if (current.left) {
			stack.push(current.left);
		}
	}
	return values;
};

module.exports = {
	depthFirstValues,
};
