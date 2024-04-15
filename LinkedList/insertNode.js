class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Recursive
  const insertNode = (head, value, index, origin = null) => {
    if (origin == null) origin = head;
    if (index == 0) {
      let newNode = new Node(value);
      newNode.next = head;
      return newNode;
    }
    if (index == 1) {
      let newNode = new Node(value);
      newNode.next = head.next;
      head.next = newNode;
      return origin;
    }
    return insertNode(head.next, value, index - 1, origin);
  };
  /* Iterative
  const insertNode = (head, value, index) => {
    let newNode = new Node(value);
    if (index == 0) {
      newNode.next = head;
      return newNode;
    }
    
    const origin = head;
    while ( index > 1) {
      head = head.next;
      index--;
    }
    newNode.next = head.next;
    head.next = newNode;
    return origin
  };
  */
  
  module.exports = {
    insertNode,
  };
  