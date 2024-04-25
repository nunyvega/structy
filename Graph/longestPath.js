const longestPath = (graph) => {
    // todo
    let longestLength = 0;
    for (node in graph){
      const currentOne = explore(graph, node, new Set(), 0)
      if (currentOne > longestLength) longestLength = currentOne;
    }
  
    return longestLength;
  };
  
  const explore = (graph, currentPoint, visited, pathLength) => {
    if (graph[currentPoint].length === 0) return pathLength;
    if (visited.has(currentPoint)) return pathLength;
    visited.add(currentPoint);
  
    let longestLength = 0;
    for (neighbor of graph[currentPoint]){
      const currentOne = explore(graph, neighbor, visited, pathLength + 1)
      if (currentOne > longestLength) longestLength = currentOne;
    }

    return longestLength
  }
  
  module.exports = {
    longestPath,
  };
  