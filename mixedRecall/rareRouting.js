const rareRouting = (n, roads) => {
	const connections = createObject(roads);
	const visited = new Set();
	const valid = getToEnd(connections, "0", visited, null);
	return valid && visited.size === n;
};

const getToEnd = (connections, start, visited, previous) => {
	if (visited.has(start)) return false;
	visited.add(start);

	for (let neighbor of connections[start]) {
		if (neighbor !== previous) {
			const res = getToEnd(connections, neighbor, visited, start);
			if (res === false) return false;
		}
	}

	return true;
};

const createObject = (roads) => {
	const result = {};
	for (let road of roads) {
		const [first, second] = road;
		if (!(first in result)) result[first] = [];
		if (!(second in result)) result[second] = [];
		result[first].push(String(second));
		result[second].push(String(first));
	}
	return result;
};

module.exports = {
	rareRouting,
};
