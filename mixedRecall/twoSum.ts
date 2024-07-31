/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// bruteforce solution
function twoSum(nums: number[], target: number): number[] {
	let firstIndex = nums.length - 2;
	let secondIndex = nums.length - 1;

	while (secondIndex > 0) {
		if (firstIndex === -1) {
			secondIndex--;
			firstIndex = secondIndex - 1;
		}
		if (nums[firstIndex] + nums[secondIndex] === target)
			return [firstIndex, secondIndex];
		firstIndex--;
	}
	return [];
}

//
function twoSum(nums: number[], target: number): number[] {
	let valueToIndexObj = {};

	nums.forEach((value, index) => {
		if (!valueToIndexObj.hasOwnProperty(value)) valueToIndexObj[value] = [];
		valueToIndexObj[value].push(index);
	});
	console.log(valueToIndexObj);
	let iterator = 0;
	while (iterator < nums.length) {
		const difference = target - nums[iterator];
		if (difference === nums[iterator]) {
			if (valueToIndexObj[difference].length > 1) {
				return [valueToIndexObj[difference][0], valueToIndexObj[difference][1]];
			} else {
				iterator++;
				continue;
			}
		}
		if (valueToIndexObj.hasOwnProperty(difference))
			return [iterator, valueToIndexObj[difference]];
		iterator++;
	}
	return [];
}
