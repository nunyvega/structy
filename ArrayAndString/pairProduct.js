const pairProduct = (numbers, targetProduct) => {
	// todo
	let numsObject = new Object();

	for (let x = 0; x < numbers.length; x++) {
		let neededNum = targetProduct / numbers[x];
		if (neededNum in numsObject) {
			return [numsObject[neededNum], x];
		}
		numsObject[numbers[x]] = x;
	}
};

module.exports = {
	pairProduct,
};
