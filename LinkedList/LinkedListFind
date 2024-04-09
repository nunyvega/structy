// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Recursive 1
const linkedListFind = (head, target) => {
  // todo
  if ( head == null) return false
  else if (head.val == target ) return true
  else return linkedListFind(head.next, target)
};

// Iter 1
const linkedListFind = (head, target) => {
  while (head !== null){
    if (head.val == target ) return true
    head = head.next
  }
  return false
}

module.exports = {
  linkedListFind,
};
