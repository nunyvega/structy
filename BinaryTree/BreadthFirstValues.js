// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
    // todo
    if (root === null) return []
    const queue = [root]
    const values = []
  
    while (queue.length > 0){
      const current = queue.shift()
      values.push(current.val)
      if(current.left){
        queue.push(current.left)
      }
      if(current.right){
        queue.push(current.right)
      }
    }
    return values;
  };
  
  module.exports = {
    breadthFirstValues,
  };
  