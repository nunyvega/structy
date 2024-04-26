const minChange = (amount, coins, memo = {}) => {
	if (amount === 0) return 0;
	if (amount < 0) return -1;
	if (amount in memo) return memo[amount];

	let minCoins = Infinity;
	for (const coin of coins) {
		const res = minChange(amount - coin, coins, memo);
		if (res < minCoins && res !== -1) minCoins = res + 1;
	}

	memo[amount] = minCoins === Infinity ? -1 : minCoins;

	return memo[amount];
};

module.exports = {
	minChange,
};
