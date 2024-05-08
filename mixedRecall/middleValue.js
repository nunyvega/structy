// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const middleValue = (head) => {
  const obj = {};
  let curr = head;
  let iter = 1;
  while (curr !== null) {
    obj[iter] = curr.val;
    iter++;
    curr = curr.next;
  }

  return obj[Math.ceil(iter / 2)];
};

module.exports = {
  middleValue,
};
