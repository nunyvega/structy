const positioningPlants = (costs, index = 0, prevIndex = null, memo = {}) => {
	const key = prevIndex + "," + index;
	if (key in memo) return memo[key];
	if (index >= costs.length) return 0;

	const prices = [];
	for (let x = 0; x < costs[0].length; x++) {
		if (x != prevIndex) {
			prices.push(
				costs[index][x] + positioningPlants(costs, index + 1, x, memo)
			);
		}
	}
	memo[key] = Math.min(...prices);
	return memo[key];
};

module.exports = {
	positioningPlants,
};
