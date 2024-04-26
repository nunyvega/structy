// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// breadth first
const bottomRightValue = (root) => {
	const queue = [root];
	let value = 0;
	let current;
	while (queue.length > 0) {
		current = queue.shift();

		if (current.left !== null) queue.push(current.left);
		if (current.right !== null) queue.push(current.right);
	}
	return current.val;
};

// recursive
const bottomRightValue2 = (root, level = 0) => {
	if (root == null) return null;
	const resultRight = bottomRightValue(root.right, level + 1);
	const resultLeft = bottomRightValue(root.left, level + 1);

	if (resultRight === null && resultLeft === null) {
		if (level == 0) return root.val;
		return { val: root.val, level: level };
	}
	if (resultRight?.level >= (resultLeft?.level || 0)) {
		if (level == 0) return resultRight.val;
		return resultRight;
	}
	if (level == 0) return resultLeft.val;
	return resultLeft;
};

module.exports = {
	bottomRightValue,
};
