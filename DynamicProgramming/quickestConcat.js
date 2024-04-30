const quickestConcat = (s, words) => {
	const l = s.length;
	const memo = {};

	let shortestCount = exploreOptions(s, words, memo, l);

	if (shortestCount === Infinity) return -1;
	return shortestCount;
};

const exploreOptions = (s, words, memo, l) => {
	if (l === 0) return 0;
	if (l in memo) return memo[l];
	memo[l] = Infinity;
	for (word of words) {
		if (s.startsWith(word)) {
			let newS = s.slice(word.length);
			let currentCount = 1 + exploreOptions(newS, words, memo, newS.length);
			memo[l] = Math.min(memo[l], currentCount);
		}
	}

	return memo[l];
};

module.exports = {
	quickestConcat,
};
