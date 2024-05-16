// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leftyNodes = (root) => {
	if (root == null) return [];
	const queue = [root];
	const leftMost = [];
	let levelCount = 1;
	let nextLevelCount = 0;
	let leftMostAdded = false;

	while (queue.length > 0) {
		let current = queue.shift();
		levelCount--;
		if (leftMostAdded == false) {
			leftMost.push(current.val);
			leftMostAdded = true;
		}
		if (current.left) {
			queue.push(current.left);
			nextLevelCount++;
		}
		if (current.right) {
			queue.push(current.right);
			nextLevelCount++;
		}
		if (levelCount == 0) {
			levelCount = nextLevelCount;
			nextLevelCount = 0;
			leftMostAdded = false;
		}
	}

	return leftMost;
};

module.exports = {
	leftyNodes,
};
