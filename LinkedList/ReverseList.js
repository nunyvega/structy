// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//Approach Recursivo
const reverseList = (head, prev = null) => {
  if (head === null) return prev
  const next = head.next // guardar termporalmente pa no perder
  head.next = prev;
  return reverseList(next, head)
}


/*Approach iterativo
const reverseList = (head) => {
  let prev = null, current = head; 

  while  (current !== null){
    const next = current.next
    current.next = prev
    prev = current;
    current = next;
  } 
  return prev
}
*/


/* hecho solo, pre ver videos
const reverseList = (head) => {
  let arr = [];
  let current = head
  while (current !== null){
    arr.unshift(current.val)
    current = current.next
  }

  let count = 0
  current = head
  while (current !== null){
    current.val = arr[count]
    count ++
    current = current.next
  }
  return head
  // todo
};
*/

module.exports = {
  reverseList,
};
