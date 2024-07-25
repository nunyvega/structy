class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // recursive with array copies
  const buildTreeInPre = (inOrder, preOrder) => {
    if (inOrder.length === 0) return null;
    const value = preOrder[0];
    const root = new Node(value);
    const mid = inOrder.indexOf(value);
    const leftInOrder = inOrder.slice(0, mid);
    const rightInOrder = inOrder.slice(mid + 1);
    const leftPreOrder = preOrder.slice(1, leftInOrder.length + 1);
    const rightPreOrder = preOrder.slice(leftInOrder.length + 1);
    root.left = buildTreeInPre(leftInOrder, leftPreOrder);
    root.right = buildTreeInPre(rightInOrder, rightPreOrder);
    return root;
  };
  

    // recursive in place
    const buildTreeInPreInPlace = (
        inOrder, 
        preOrder, 
        inOrderStart = 0, 
        inOrderEnd = inOrder.length - 1, 
        preOrderStart = 0, 
        preOrderEnd = preOrder.length - 1) => {
          if (inOrderEnd < inOrderStart) return null;
          const value = preOrder[preOrderStart];
          const root = new Node(value);
          const mid = inOrder.indexOf(value);
          const leftSize = mid - inOrderStart;
          root.left = buildTreeInPre(
            inOrder, 
            preOrder, 
            inOrderStart, 
            mid - 1, 
            preOrderStart + 1, 
            preOrderStart + leftSize
          );
          root.right = buildTreeInPre(
            inOrder, 
            preOrder, 
            mid + 1, 
            inOrderEnd, 
            preOrderStart + leftSize + 1, 
            preOrderEnd
          );
          return root;
      };
  
  module.exports = {
    buildTreeInPre,
  };
  