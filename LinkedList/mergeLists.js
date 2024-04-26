class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const mergeLists = (head1, head2) => {
	if (head1 === null && head2 === null) return null;
	if (head1 === null) return head2;
	if (head2 === null) return head1;

	if (head1.val < head2.val) {
		const next1 = head1.next;
		head1.next = mergeLists(next1, head2);
		return head1;
	} else {
		const next2 = head2.next;
		head2.next = mergeLists(head1, next2);
		return head2;
	}
};

/*Recursive method 2
const mergeLists = (head1, head2, tail = new Node(null), origin = null) => {
*/
