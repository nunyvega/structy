const mergeSort = (nums) => {
	if (nums.length <= 1) return nums;

	const mid = Math.floor(nums.length / 2);
	const left = mergeSort(nums.slice(0, mid));
	const right = mergeSort(nums.slice(mid));

	return sort(left, right);
};

const sort = (arr1, arr2) => {
	const sorted = [];
	while (arr1.length > 0 || arr2.length > 0) {
		if (arr1.length == 0) sorted.push(arr2.shift());
		else if (arr2.length == 0 || arr1[0] < arr2[0]) sorted.push(arr1.shift());
		else sorted.push(arr2.shift());
	}

	return sorted;
};

module.exports = {
	mergeSort,
};
