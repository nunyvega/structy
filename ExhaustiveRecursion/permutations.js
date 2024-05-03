const permutations = (items) => {
	if (items.length === 0) return [[]]; //base case

	const first = items[0]; // remove first item to then add it in different indexes
	const perms = permutations(items.slice(1)); // recursively call w/out first

	const allPermutations = []; // create array for responses
	for (let perm of perms) {
		// iterate over each permutation without first item
		for (let i = 0; i <= perm.length; i++) {
			// Push first item in all possible indexes, including last (<= perm.length)
			allPermutations.push([...perm.slice(0, i), first, ...perm.slice(i)]);
		}
	}

	return allPermutations;
};

//Perso approach
const permutations2 = (arr, perm = [], result = []) => {
	if (arr.length === 0) {
		result.push(perm);
	} else {
		for (let i = 0; i < arr.length; i++) {
			const newArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
			permutations(newArr, [...perm, arr[i]], result);
		}
	}
	return result;
};

module.exports = {
	permutations,
};
