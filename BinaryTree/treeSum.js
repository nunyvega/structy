// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Recursive (depth first)
const treeSum = (root) => {
	if (root === null) return 0;

	const leftSum = treeSum(root.left);
	const rightSum = treeSum(root.right);

	return root.val + leftSum + rightSum;
};

// Iterative (breadth first, using queue)
const treeSum2 = (root) => {
	if (root === null) return 0;
	const queue = [root];
	let sum = 0;

	while (queue.length > 0) {
		const current = queue.shift();
		sum += current.val;

		if (current.left) {
			queue.push(current.left);
		}

		if (current.right) {
			queue.push(current.right);
		}
	}
	return sum;
};

module.exports = {
	treeSum,
};
