const maxPathSum = (grid) => {
	const sums = {};
	return explore([0, 0], grid, sums);
};

const explore = (position, grid, sums) => {
	const [y, x] = position;
	const str = `${y},${x}`;
	if (y >= grid.length || x >= grid[0].length) return 0;
	if (str in sums) return sums[str];

	let a = explore([y + 1, x], grid, sums);
	let b = explore([y, x + 1], grid, sums);

	sums[str] = Math.max(a, b) + grid[y][x];
	return sums[str];
};

module.exports = {
	maxPathSum,
};
