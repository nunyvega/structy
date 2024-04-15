class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  /* Recursive
  const createLinkedList = (values) => {
    
      if (values.length == 0 ) return null;
      let currentNode = new Node(values[0])
      values.splice(0,1)
      currentNode.next = createLinkedList(values)
      return currentNode; 
  }
   */
  /* Iterative 1
  const createLinkedList = (values) => {
    if (values.length == 0 ) return null;
    let currentNode = new Node(values[0])
    let origin = currentNode;
    for ( let iter = 1; iter < values.length; iter++){
      let nextNode = new Node(values[iter])
      currentNode.next = nextNode;
      currentNode = currentNode.next;
    }
  
    return origin;
  };
  */ 
  // Iterative 2
  const createLinkedList = ( values ) => {
    let dummyNode = new Node (null)
    let tail = dummyNode
    for (val of values){
      let newNode = new Node(val)
      tail.next = newNode;
      tail = tail.next;
    }
  
      return dummyNode.next;
  }
  module.exports = {
    createLinkedList,
  };
  