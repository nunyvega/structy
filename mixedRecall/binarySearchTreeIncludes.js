// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const binarySearchTreeIncludes = (root, target) => {
    // todo
    const queue = [];
    queue.push(root);
    
    while ( queue.length > 0) {
      const current = queue.shift();
      if (current.val === target) return true
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
  
    return false;
  };
  
  module.exports = {
    binarySearchTreeIncludes,
  };
  