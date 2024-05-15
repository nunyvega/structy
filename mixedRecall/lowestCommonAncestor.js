// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const lowestCommonAncestor = (root, val1, val2) => {
	const firstValAncestors = findAncestors(root, val1);
	const secondValAncestors = findAncestors(root, val2);
	console.log(firstValAncestors);
	console.log(secondValAncestors);

	let iterator = 0;
	while (
		firstValAncestors[iterator] == secondValAncestors[iterator] &&
		iterator < Math.min(firstValAncestors.length, secondValAncestors.length)
	) {
		iterator++;
	}
	return firstValAncestors[iterator - 1];
};

const findAncestors = (root, val, ancestors = []) => {
	if (root == null) return false;
	if (root.val == val) return [...ancestors, val];
	const ances = [...ancestors];
	ances.push(root.val);
	const left = findAncestors(root.left, val, ances);
	const right = findAncestors(root.right, val, ances);

	if (left != false) return left;
	return right;
};

module.exports = {
	lowestCommonAncestor,
};
