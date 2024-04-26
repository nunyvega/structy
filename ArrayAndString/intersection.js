const intersection = (a, b) => {
	// todo
	const setA = new Set(a);
	const intersect = [];
	for (const num of b) if (setA.has(num)) intersect.push(num);

	return intersect;
};

module.exports = {
	intersection,
};
