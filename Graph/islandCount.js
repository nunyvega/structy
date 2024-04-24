const islandCount = (grid) => {

    const explored = new Set();
    // todo
    let count = 0;
    for (let x = 0; x < grid.length; x++){
        for (let i = 0; i < grid[x].length; i++){
          count += explore(grid, x, i, explored)
          
        }
    }
    return count;
  
  };
  
  const explore = (grid, x, i, explored) => {
  
    const pos = x + ',' + i;
    if (explored.has(pos) || grid[x][i] === 'W') {
      return 0;
    }
    explored.add(pos);
  
    if (x-1 >= 0 && grid[x-1][i] === 'L') explore(grid, x-1, i, explored);
    if (x+1 < grid.length && grid[x+1][i] === 'L') explore(grid, x+1, i, explored);
    if (i-1 >= 0 && grid[x][i-1] === 'L') explore(grid, x, i-1, explored);
    if (i+1 < grid[x].length && grid[x][i+1] === 'L') explore(grid, x, i+1, explored);
  
    return 1;
  
  }
    
  
  
  
  
  module.exports = {
    islandCount,
  };
  