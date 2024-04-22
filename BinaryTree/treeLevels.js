// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// Recursive version
const treeLevels = (root) => {
    const levels = [];
    fillLevels(root, levels, 0)
    
    return levels;
  }
  
  const fillLevels = (root, levels, currentLevel) => {
    if (root === null) return false;
    
    if (!levels[currentLevel]) levels[currentLevel] = []
      levels[currentLevel].push(root.val)
    
    fillLevels(root.left, levels, currentLevel + 1);
    fillLevels(root.right, levels, currentLevel + 1);
  }
  
  // Iterative, breadth first
  const treeLevels2 = (root) => {
    if (!root) return []
    
    const queue = [root]
    const levelsArray = [];
    let levelCount = 1;
    let nextLevelCount = 0;
    let currentLevel = 0;
    
    while (queue.length > 0){
      const current = queue.shift();
      
      if (current.left ) {
        queue.push(current.left)
        nextLevelCount++;
      }
      if (current.right ) {
        queue.push(current.right)
        nextLevelCount++;
      }
      
      if (!levelsArray[currentLevel]) levelsArray[currentLevel] = []
      levelsArray[currentLevel].push(current.val)
  
      levelCount--;
      if (levelCount === 0) {
        currentLevel++
        levelCount = nextLevelCount;
        nextLevelCount = 0
      }
      
    }
  
    return levelsArray;
  };
  
  module.exports = {
    treeLevels,
  };
  