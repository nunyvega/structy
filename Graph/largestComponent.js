const largestComponent = (graph) => {
	// todo
	const visited = new Set();
	let largest = 0;

	for (node in graph) {
		let count = exploreAndCount(graph, node, visited);
		if (count > largest) largest = count;
	}

	return largest;
};

const exploreAndCount = (graph, node, visited) => {
	if (visited.has(String(node))) return 0;
	visited.add(String(node));

	let count = 1;
	for (neighbour of graph[node]) {
		count += exploreAndCount(graph, neighbour, visited);
	}

	return count;
};

module.exports = {
	largestComponent,
};
