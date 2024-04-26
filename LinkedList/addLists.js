class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

// Recursive
const addLists = (head1, head2, carryOver = 0) => {
	if (head1 === null && head2 === null && carryOver === 0) return null;
	let firstVal = head1 === null ? 0 : head1.val;
	let secondVal = head2 === null ? 0 : head2.val;
	let sum = firstVal + secondVal + carryOver;
	if (sum > 9) {
		carryOver = 1;
		sum = sum % 10;
	} else {
		carryOver = 0;
	}

	let tail = new Node(sum);
	let next1 = head1?.next ? head1.next : null;
	let next2 = head2?.next ? head2.next : null;

	tail.next = addLists(next1, next2, carryOver);
	return tail;
};

// Iterative
const addLists2 = (head1, head2) => {
	// todo
	let dummyHead = new Node(null);
	let tail = dummyHead;
	let carryOver = 0;

	while (head1 !== null || head2 !== null || carryOver > 0) {
		let firstVal = head1 === null ? 0 : head1.val;
		let secondVal = head2 === null ? 0 : head2.val;
		let sum = firstVal + secondVal + carryOver;
		if (sum > 9) {
			carryOver = 1;
			sum = sum % 10;
		} else {
			carryOver = 0;
		}

		let newNode = new Node(sum);
		tail.next = newNode;

		tail = tail.next;
		if (head1 !== null) head1 = head1.next;
		if (head2 !== null) head2 = head2.next;
	}

	return dummyHead.next;
};

module.exports = {
	addLists,
};
