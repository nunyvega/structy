const shortestPath = (edges, nodeA, nodeB) => {
    //create graph from edges
    const graph = graphCreator(edges);
    const visited = new Set();
    const queue = [];
    queue.unshift(nodeA)
  
    let count  = 0;
    let depthCount = 0;
    let addedCount = 1;
    while (queue.length > 0){
      const current = queue.shift();
      addedCount--;
      if (addedCount == 0 )count++;
      if (current === nodeB) return count;
  
      for (neighbor of graph[current]){
        if (!(visited.has(neighbor))){
          queue.push(neighbor)
          visited.add(neighbor)
         addedCount++;
        }
      }
    }
  
    return -1
  }
  
  const graphCreator = (edges) => {
    const graph = {};
    
    for (let edge of edges) {
      const [a,b] = edge;
      if (! (a in graph)) graph[a] = []
      if (! (b in graph)) graph[b] = []
      graph[a].push(b)
      graph[b].push(a)
    }
    return graph;
  }
  
  module.exports = {
    shortestPath,
  };
  
  