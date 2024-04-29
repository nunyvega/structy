const summingSquares = (n, memo = {}) => {
	if (n === 0) return 0;
	if (n in memo) return memo[n];
	memo[n] = Infinity;
	for (let x = 1; x <= Math.sqrt(n); x++) {
		const square = x * x;

		const currentSteps = 1 + summingSquares(n - square, memo);

		memo[n] = Math.min(memo[n], currentSteps);
	}
	return memo[n];
};

module.exports = {
	summingSquares,
};
