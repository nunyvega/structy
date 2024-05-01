const subsets = (elements, subsetsArray = [[]], memo = {}) => {
	if (elements.length === 0) {
		return subsetsArray;
	}
	const str = String(elements);
	if (str in memo) return subsetsArray;

	memo[str] = subsetsArray;
	subsetsArray.push(elements);
	for (let x = 0; x < elements.length; x++) {
		const newArr = [...elements];
		newArr.splice(x, 1);
		subsets(newArr, subsetsArray, memo);
	}

	return memo[str];
};
