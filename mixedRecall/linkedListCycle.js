// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// O(n) with O(1) space
const linkedListCycle = (head) => {
  if (head === null || head.next === null) return false;
  let fast = head.next;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    if (fast.val === slow.val) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};

// O(n) with O(n) spapce
const linkedListCycle2 = (head) => {
  const visited = new Set();
  let current = head;

  while (current !== null) {
    if (visited.has(current.val)) return true;
    visited.add(current.val);
    current = current.next;
  }

  return false;
};

module.exports = {
  linkedListCycle,
};
