const minimumIsland = (grid) => {
    // todo
    const visited = new Set();
    let smallest = Infinity;
    
    for ( let x = 0 ; x < grid.length; x++){
      for ( let y = 0 ; y < grid[x].length; y++){
        let count = explore(grid, x, y, visited);
        if (count < smallest && typeof count == 'number') smallest = count;
      }
    }
  
    return smallest;
  };
  
  const explore = (grid, x, y, visited, count = 0) => {
    const insideXBoundary = x >= 0 && x < grid.length;
    const insideYBoundary = y >= 0 && y < grid[0].length;
    
    if ( (! (insideXBoundary && insideYBoundary)) || grid[x][y] === 'W') return false;
  
    const position = x + ',' + y;
    if (visited.has(position)) return false;
    visited.add(position);
    
    count++;
    count += explore(grid, x-1, y, visited);
    count += explore(grid, x+1, y, visited);
    count += explore(grid, x, y-1, visited);
    count += explore(grid, x, y+1, visited);
    return count;
    
  }
  
  module.exports = {
    minimumIsland,
  };
  