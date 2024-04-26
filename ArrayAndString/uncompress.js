const uncompress = (s) => {
	let finalString = "";
	let leftPointer = 0;
	let rightPointer = 0;

	while (leftPointer < s.length - 1) {
		if (!isNaN(Number(s[rightPointer]))) {
			rightPointer++;
		} else {
			finalString += s[rightPointer].repeat(
				Number(s.substring(leftPointer, rightPointer))
			);
			leftPointer = rightPointer + 1;
			rightPointer = leftPointer + 1;
		}
	}
	return finalString;
};

module.exports = {
	uncompress,
};
