const bestBridge = (grid) => {
	const visited = new Set();
	const queue = [];

	const firstPieceOfLand = findFirstPieceOfLand(grid);
	const firstIsland = findIsland(firstPieceOfLand, grid);
	const shortestBirdgeDistance = findShortestBridge(firstIsland, grid);

	return shortestBirdgeDistance - 1; // do not count the last piece, which is land
};

const findFirstPieceOfLand = (grid) => {
	for (let x = 0; x < grid.length; x++) {
		let i = 0;
		while (i < grid[x].length) {
			if (grid[x][i] == "L") return [x, i];
			i++;
		}
	}
	return false;
};

const findIsland = (firstPieceOfLand, grid) => {
	const islandLocations = new Set();
	const visited = new Set();
	const queue = [firstPieceOfLand];

	while (queue.length > 0) {
		const [x, i] = queue.shift();
		const coordStr = `${x},${i}`;
		if (visited.has(coordStr)) continue;
		visited.add(coordStr);

		if (x < 0 || x >= grid.length) continue;
		if (i < 0 || i >= grid[x].length) continue;
		if (grid[x][i] == "W") continue;
		islandLocations.add(coordStr);
		queue.push([x - 1, i], [x + 1, i], [x, i - 1], [x, i + 1]);
	}
	return islandLocations;
};

const findShortestBridge = (islandSet, grid) => {
	let shortestBridge = Infinity;

	islandSet.forEach((coordStr) => {
		const [x, i] = coordStr.split(",").map(Number);
		const queue = [[x, i]];
		const count = [0];
		const visited = new Set(coordStr);

		while (queue.length > 0) {
			const [currX, currY] = queue.shift();
			const distance = count.shift();
			const currCoordStr = `${currX},${currY}`;
			if (currX < 0 || currX >= grid.length) continue;
			if (currY < 0 || currY >= grid[currX].length) continue;

			if (visited.has(currCoordStr)) continue;
			visited.add(currCoordStr);

			if (grid[currX][currY] === "L" && !islandSet.has(currCoordStr)) {
				shortestBridge = Math.min(shortestBridge, distance);
				break;
			}
			queue.push(
				[currX - 1, currY],
				[currX + 1, currY],
				[currX, currY - 1],
				[currX, currY + 1]
			);
			count.push(distance + 1, distance + 1, distance + 1, distance + 1);
		}
	});
	return shortestBridge;
};

module.exports = {
	bestBridge,
};
