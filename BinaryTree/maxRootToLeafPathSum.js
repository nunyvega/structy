// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Recursive
const maxPathSum = (root) => {
    if (root === null) return -Infinity
    if(root.left === null && root.right === null) return root.val
    const l = maxPathSum(root.left)
    const r = maxPathSum(root.right)
    return root.val + Math.max(l,r)
  }
  /*
  const maxPathSum2 = (root) => {
    // todo
    const stack = [root]
    cont maxSum = 0;
    let currentSum = 0;
    while (stack.length > 0){
      
    }
  };
  */
  module.exports = {
    maxPathSum,
  };
  