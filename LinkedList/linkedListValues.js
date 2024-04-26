// Version iterativa
/*const linkedListValues = (head) => {
  const arr = []
  while(head !== null){
    arr.push(head.val)
    head = head.next
  }
  return arr;
};
*/

// Version recursiva
const linkedListValues = (head) => {
	const arr = [];
	fillValues(head, arr);
	return arr;
};

const fillValues = (head, arr) => {
	if (head !== null) {
		arr.push(head.val);
		fillValues(head.next, arr);
	}
};

module.exports = {
	linkedListValues,
};
