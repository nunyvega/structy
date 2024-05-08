// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedPalindrome = (head) => {
  const arr = [];
  let curr = head;
  while (curr !== null) {
    arr.push(curr.val);
    curr = curr.next;
  }

  const regular = arr.join("");
  const reversed = arr.reverse().join("");
  return reversed === regular;
};

module.exports = {
  linkedPalindrome,
};
