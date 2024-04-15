// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

/*Iterative solution
const sumList = (head) => {
  let sum = 0;
  while (head !== null){
    sum+= head.val;
    head = head.next;
  }
  return sum;
};

*/
// Recursive solution 1
const sumList = (head) => {
  if (head == null) return 0
  return head.val + sumList(head.next)
};
/* Recursive solution 2
const sumList = (head) => {
  let sum = 0;
  sum = calculate(head, sum)
  return sum;
};

const calculate = (head, sum) => {
  if (head == null) return sum;
  sum += head.val
  return calculate(head.next, sum)
}

*/
module.exports = {
  sumList,
};
