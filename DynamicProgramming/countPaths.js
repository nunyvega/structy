const countPaths = (grid) => {
	return explore([0, 0], grid);
};

const explore = (position, grid, memo = {}) => {
	const [y, x] = position;
	const str = `${y},${x}`;

	if (y >= grid.length || x >= grid[0].length) return 0;
	if (grid[y][x] == "X") return 0;
	if (y == grid.length - 1 && x == grid[0].length - 1) return 1;
	if (str in memo) return memo[str];

	memo[str] = 0;
	memo[str] += explore([y + 1, x], grid, memo);
	memo[str] += explore([y, x + 1], grid, memo);

	return memo[str];
};

module.exports = {
	countPaths,
};
