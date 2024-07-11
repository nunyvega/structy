class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const buildTreeInPost = (inOrder, postOrder) => {
    if (inOrder.length === 0) return null;
    const value = postOrder[postOrder.length - 1];
    const root = new Node(value);
    const mid = inOrder.indexOf(value);
    const leftIn = inOrder.slice(0, mid);
    const rightIn = inOrder.slice(mid + 1);
    const leftPost = postOrder.slice(0, leftIn.length);
    const rightPost = postOrder.slice(leftIn.length, -1);
    root.left = buildTreeInPost(leftIn, leftPost);
    root.right = buildTreeInPost(rightIn, rightPost);
    return root;
  };
  module.exports = {
    buildTreeInPost,
  };
  