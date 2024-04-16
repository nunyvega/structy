// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// Approach de walkthrough
const zipperLists = (head1, head2) => {
  // todo
  const head = head1;
  let tail = head;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;
  
  while (current1 != null && current2 != null){
    if (count % 2 == 0){
      tail.next = current2
      current2 = current2.next
    } else {
      tail.next = current1
      current1 = current1.next
    }

  tail = tail.next
   count++;
  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;
  
  return head;
};

/* Recursivo
const zipperLists = (head1, head2, origin = null) => {
    if ( origin == null)  origin = head1
    if ( head1 == null || head2 == null ) return origin
    
    let next1 = head1.next;
    head1.next = head2;
    if ( next1 == null ) return origin
    head2.next = next1;  
  
    return zipperLists(next1, head2.next, origin)
}
*/

/* Iterativo
const zipperLists = (head1, head2) => {
  // todo
  let origin = head1;
  while (head1 != null && head2 != null){
    let next1 = head1.next;
    let next2 = head2.next;

    head1.next = head2;
    if ( next1 != null ) head2.next = next1;

    head1 = next1;
    head2 = next2;
  }
  return origin;
};
*/

module.exports = {
  zipperLists,
};
