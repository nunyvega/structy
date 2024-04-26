const hasCycle = (graph) => {
	const visited = new Set();
	// todo
	for (let node in graph) {
		const hasCycle = explore(node, graph, new Set(), visited);
		if (hasCycle) return true;
	}

	return false;
};

const explore = (node, graph, visiting, visited) => {
	if (visited.has(node)) return false;
	if (visiting.has(node)) return true;
	visiting.add(node);

	for (let neighbor of graph[node]) {
		if (explore(neighbor, graph, visiting, visited) === true) {
			return true;
		}
	}

	visiting.delete(node);
	visited.add(node);
	return false;
};

module.exports = {
	hasCycle,
};
