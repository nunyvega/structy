// Recursive depth first;
const hasPath = (graph, src, dst) => {
	if (src == dst) return true;
	for (let neighbour of graph[src]) {
		if (hasPath(graph, neighbour, dst) === true) {
			return true;
		}
	}
	return false;
};

// Iterative breadth first;
const hasPath2 = (graph, src, dst) => {
	const queue = [src];

	while (queue.length > 0) {
		const current = queue.shift();
		if (current == dst) return true;

		for (let neighbour of graph[current]) {
			queue.push(neighbour);
		}
	}

	return false;
};

// Iterative depth first;
const hasPath3 = (graph, src, dst) => {
	const stack = [src];

	while (stack.length > 0) {
		const current = stack.pop();
		if (current == dst) return true;

		for (let neighbour of graph[current]) {
			stack.push(neighbour);
		}
	}

	return false;
};

module.exports = {
	hasPath,
};
