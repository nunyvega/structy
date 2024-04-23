const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = getGraph(edges)
    return hasPath(graph, nodeA, nodeB, new Set());
  };
  
  const getGraph = (edges) => {
    const graph = {}
   
    edges.forEach( (arr) => {
      const [a,b] = arr
      if (! (a in graph)) graph[a] = []
      if (! (b in graph)) graph[b] = []
      graph[a].push(b)
      graph[b].push(a)
    })
  
    return graph
  }
  
  
  const hasPath = (graph, src, dst, visited) =>{
    if (src === dst) return true;
    if (visited.has(src)) return false;
    visited.add(src);
  
    for (neighbour of graph[src]){
      if (hasPath(graph, neighbour, dst, visited) == true ) return true
    }
    return false
  }
  
  module.exports = {
    undirectedPath,
  };
  