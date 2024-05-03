const permutations = (items) => {
	if (items.length === 0) return [[]];
	const first = items[0];
	const perms = permutations(items.slice(1));

	const fullPermutations = [];
	for (let perm of perms) {
		for (let i = 0; i <= perm.length; i++) {
			let newArr = [...perm.slice(0, i), first, ...perm.slice(i)];
			fullPermutations.push(newArr);
		}
	}

	return fullPermutations;
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
