// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Recursive
const isUnivalueList = (head) => {
	if (head.next === null) return true;
	if (head.val === head.next.val) {
		return isUnivalueList(head.next);
	}
	return false;
};

/* iterative
  const isUnivalueList = (head) => {
    // todo
    let value = head.val;
    while (head !== null) {
      if (head.val != value) return false;
      head = head.next;
    }
    return true;
  };
  */
module.exports = {
	isUnivalueList,
};
