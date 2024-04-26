const closestCarrot = (grid, startRow, startCol) => {
	// todo
	const visited = new Set();
	const queue = [[startRow, startCol, 0]];

	while (queue.length > 0) {
		let [row, col, steps] = queue.shift();
		if (!(row >= 0 && row < grid.length && col >= 0 && col < grid[0].length))
			continue;

		let pos = row + "," + col;
		if (visited.has(pos)) continue;
		visited.add(pos);

		if (grid[row][col] === "C") return steps;
		else if (grid[row][col] === "O") {
			queue.push([row - 1, col, steps + 1], [row + 1, col, steps + 1]);
			queue.push([row, col - 1, steps + 1], [row, col + 1, steps + 1]);
		}
	}

	return -1;
};

module.exports = {
	closestCarrot,
};
