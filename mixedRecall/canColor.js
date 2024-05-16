const canColor = (graph) => {
	const colored = {};
	const visited = new Set();
	const nodes = Object.keys(graph);

	const bfs = (start) => {
		const queue = [start];
		colored[start] = true;

		while (queue.length > 0) {
			let key = queue.shift();
			if (!visited.has(key)) {
				visited.add(key);
				for (let letter of graph[key]) {
					// Declare 'letter' with 'let'
					if (colored[letter] === colored[key]) return false;
					if (!(letter in colored)) colored[letter] = !colored[key];
					queue.push(letter);
				}
			}
		}
		return true;
	};

	// Check all nodes to handle disconnected graphs
	for (let node of nodes) {
		if (!visited.has(node)) {
			if (!bfs(node)) return false;
		}
	}

	return true;
};

module.exports = {
	canColor,
};
