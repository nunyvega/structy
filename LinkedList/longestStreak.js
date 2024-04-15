// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Recursive
const longestStreak = (head, currentValue = null, count = 0, longest = 0) =>{
    if (head === null) return longest    
    if (currentValue !== head.val){
        count = 0;
        currentValue = head.val;
      }
    count++;
      if ( count > longest) longest = count;
      return longestStreak(head.next, currentValue, count, longest)
  }
  
  /* Iterative
  const longestStreak = (head) => {
    let count = 0
    let longest = 0;
    let currentValue = null
    while (head !== null) {
      if (currentValue !== head.val){
        count = 0;
        currentValue = head.val;
      }
      count++;
      if ( count > longest) longest = count;
      head = head.next;
    }
    return longest;
  };
  */
  module.exports = {
    longestStreak,
  };
  