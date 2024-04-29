const countingChange = (amount, coins, i = 0, memo = {}) => {
	if (amount === 0) return 1;

	const key = amount + "," + i;
	if (key in memo) return memo[key];

	const coin = coins[i];
	let count = 0;
	for (let x = 0; x * coin <= amount; x++) {
		count += countingChange(amount - x * coin, coins, i + 1, memo);
	}
	memo[key] = count;
	return count;
};

module.exports = {
	countingChange,
};
