const hasCycle = (graph) => {
	for (node in graph) {
		const hasCycle = explore(node, graph);
		if (hasCycle) return true;
	}

	return false;
};

const explore = (node, graph) => {
	const visited = new Set();

	let queue = [node];
	let count = 0;
	while (queue.length > 0) {
		const current = queue.shift();
		if (current == node) count++;
		if (count == 2) return true;
		if (visited.has(String(current))) continue;
		visited.add(String(current));
		for (neighbor of graph[current]) {
			queue.push(neighbor);
		}
	}
	return false;
};

module.exports = {
	hasCycle,
};
