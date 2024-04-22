// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const howHigh = (node) => {
    let count = 0;
    if (node === null) return -1;
    count++
    count += Math.max(howHigh(node.left) , howHigh(node.right))
  
    return count;
    // todo
  };
  
  module.exports = {
    howHigh,
  };
  