const createCombinations = (items, k) => {
	if (k === 0) return [[]];
	if (k > items.length) return [];

	// Extract 1st item
	const first = items[0];

	// Recursive call with k-1 and without first item
	const partialWith = createCombinations(items.slice(1), k - 1);
	// Add the 1st item back to the results
	const withFirst = partialWith.map((item) => [first, ...item]);
	// Recursive call without 1st item, full length
	const without = createCombinations(items.slice(1), k);

	return [...without, ...withFirst];
};

module.exports = {
	createCombinations,
};
