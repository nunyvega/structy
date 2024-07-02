// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const postOrder = (root, orders = []) => {
	if (!root) return orders;
	orders.unshift(root.val);
	postOrder(root.right, orders);
	postOrder(root.left, orders);

	return orders;
};

const postOrderStack = (root) => {
	if (!root || root.length == 0) return [];
	const orders = [];
	const stack = [];
	stack.push(root);

	while (stack.length > 0) {
		const current = stack.pop();
		orders.unshift(current.val);
		if (current.left) stack.push(current.left);
		if (current.right) stack.push(current.right);
	}
	return orders;
};

module.exports = {
	postOrder,
};
