const pairSum = (numbers, targetSum) => {
    const numsObject = {}
  
    for ( let iter = 0; iter < numbers.length; iter++ ){
      let complement = targetSum - numbers[iter];
    
      if (numsObject.hasOwnProperty(complement)){
        return [numsObject[complement],iter]
      } else {
        numsObject[numbers[iter]] = iter
      }
    }
  
  }
  
  
  /*const pairSum = (numbers, targetSum) => {
    let left = 0;
    let right = 1;
    
    while(true){
      if (numbers[left]> targetSum){
        left++
      } else {
        while ( right < numbers.length){
          if (numbers[left] + numbers[right] == targetSum){
            console.log(`returning ${left} and ${right}`)
              return [left, right];
          } else {
            right++
          }
        }
        left++
        right = left + 1
      }
    }
  
    
    
  };
  */
  module.exports = {
    pairSum,
  };
  