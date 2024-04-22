// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Breadth First
const treeValueCount = (root, target) => {
    if (!root) return 0
    const queue = [root]
    let count = 0
    while (queue.length > 0){
      const current = queue.shift()
      if (current.val && current.val === target) count++
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
  
  
    return count;
  }
  
  // Depth First
  const treeValueCount2 = (root, target) => {
    if (!root) return 0
    const stack = [root]
    let count = 0
    while (stack.length > 0){
      const current = stack.pop()
      if (current.val && current.val === target) count++
      if (current.left) stack.push(current.left)
      if (current.right) stack.push(current.right)
    }
  
  
    return count;
  }
  
  // Recursive
  const treeValueCount3 = (root, target) => {
    if (root == null) return 0;
    let count = 0;
    if (root.val == target) count++;
    count += treeValueCount(root.left, target) + treeValueCount(root.right, target)
    return count;
  };
  
  module.exports = {
    treeValueCount,
  };
  