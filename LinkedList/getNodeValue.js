// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//Recursive solution 1
const getNodeValue = (head, index) => {
	if (head === null) return null;
	if (index === 0) return head.val;
	return getNodeValue(head.next, index - 1);
};

/* Recursive solution 2
const getNodeValue = (head, index) => {
  return matchIndex(head, index, 0);
}

const matchIndex = (head, index, count) => {
    if (head == null) return null
    if (count == index) return head.val
    return matchIndex(head.next, index, count+1)
}
*/
/* Iterative solution
const getNodeValue = (head, index) => {
  // todo
  let count = 0;
  while (head !== null){
    if (count == index) return head.val
    head = head.next
    count++
  }
  return null;
};
*/

module.exports = {
	getNodeValue,
};
