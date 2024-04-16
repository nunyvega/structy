// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
    if (root == null) return Infinity;
    return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right))
  }
  
  // Iterative
  const treeMinValue2 = (root) => {
    // todo
    let min = root.val
    const stack = [root]
    while (stack.length > 0){
      const current = stack.pop()
  
      if (current.val < min) min = current.val
  
      if (current.left) stack.push(current.left)
      if (current.right) stack.push(current.right)
    }
    return min;
  };
  
  module.exports = {
    treeMinValue,
  };
  