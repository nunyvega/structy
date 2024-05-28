const maxIncreasingSubseq = (
	numbers,
	index = 0,
	previous = -Infinity,
	memo = {}
) => {
	const key = previous + " " + index;
	if (key in memo) return memo[key];
	if (index === numbers.length) return 0;

	const current = numbers[index];
	const withoutCurrent = maxIncreasingSubseq(
		numbers,
		index + 1,
		previous,
		memo
	);
	let withCurrent = -Infinity;
	if (previous < current) {
		withCurrent = 1 + maxIncreasingSubseq(numbers, index + 1, current, memo);
	}

	memo[key] = Math.max(withCurrent, withoutCurrent);
	return memo[key];
};

module.exports = {
	maxIncreasingSubseq,
};
