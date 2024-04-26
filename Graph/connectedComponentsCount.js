const connectedComponentsCount = (graph) => {
	// todo
	const visited = new Set();
	let count = 0;

	for (key in graph) {
		if (explore(graph, key, visited) === true) count++;
	}
	return count;
};

const explore = (graph, current, visited) => {
	if (visited.has(String(current))) return false;
	visited.add(String(current));

	for (neighbour of graph[current]) explore(graph, neighbour, visited);
	return true;
};

module.exports = {
	connectedComponentsCount,
};
