const binarySearch = (numbers, target) => {
    let low = 0;
    let right = numbers.length - 1;
  
    while (low <= right){
      const midPoint = Math.floor((low + right) / 2);
      const midPointValue = numbers[midPoint];
      console.log(midPointValue)
      if (midPointValue === target) return midPoint;
      if (midPointValue > target) right = midPoint -1;
      if (midPointValue < target) low = midPoint + 1;
    }
  
    return -1;
  }
  
  
  
  
  const binarySearchRecursive = (numbers, target ) => {
    if (numbers.length == 0) return -1
  
    const midPoint = Math.floor(numbers.length/2);
    const midPointValue = numbers[midPoint] 
    
    if ( midPointValue == target ) return midPoint
    else if (midPointValue < target ) {
      const res = binarySearch (numbers.slice(midPoint+1), target)
      if (res === -1) return -1;
      return midPoint + 1 + res
    } else if (midPointValue > target )  return binarySearch (numbers.slice(0, midPoint), target)
    
  };
  
  module.exports = {
    binarySearch,
  };
  