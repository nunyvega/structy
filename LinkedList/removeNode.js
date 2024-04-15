// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Recursive
const removeNode = (head, targetVal, prev = null) => {
    if (head.val === targetVal && prev === null) return head.next
    if (head.val === targetVal){
      prev.next = head.next;
    } else {
      removeNode(head.next, targetVal, head)
    }
    return head;
}

/* Iterative
const removeNode = (head, targetVal) => {
  let origin = head;
  if (head.val === targetVal) return head.next
  let prev = null
  while (head.val != targetVal ){
    prev = head
    head = head.next
  }
  prev.next = head.next
  return origin
  // todo
};
*/
module.exports = {
  removeNode,
};
