const canConcat = (s, words, newS = "", memo = {}) => {
	if (newS in memo) return memo[newS];
	if (newS.length >= s.length) return newS === s;

	memo[newS] = false;
	for (word of words) {
		if (canConcat(s, words, newS + word, memo) === true) {
			memo[newS] = true;
		}
	}

	return memo[newS];
};

module.exports = {
	canConcat,
};
