// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const levelAverages = (root) => {
    if (!root) return [];
    // todo
    const queue = [root];
    let currentLevel = 0;
    let currentLevelCounter = 1;
    let nextLevelCounter = 0;
    const numsPerLevel = [];
    const levelAveragesArray = [];
  
    while (queue.length > 0){
      const current = queue.shift();
  
      if (!numsPerLevel[currentLevel]) numsPerLevel[currentLevel] = [];
      numsPerLevel[currentLevel].push(current.val);
  
      if (current.left){
        queue.push(current.left);
        nextLevelCounter++;
      }
      if (current.right){
        queue.push(current.right);
        nextLevelCounter++;
      }
      
      currentLevelCounter--;
      if (currentLevelCounter === 0){
        currentLevel++;
        currentLevelCounter = nextLevelCounter;
        nextLevelCounter = 0;
      }
    }
  
    numsPerLevel.forEach((numbers) =>{
      let sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      },0);
      levelAveragesArray.push((sum/numbers.length))
    })
  
    return levelAveragesArray;
    
  };
  
  module.exports = {
    levelAverages,
  };
  