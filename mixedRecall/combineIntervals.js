const combineIntervals = (intervals) => {
	const newArr = [];
	for (let x = 0; x < intervals.length; intervals++) {
		for (let y = 0; y < intervals.length; intervals++) {
			if (x !== y) {
				if ((x[0] < y[0] && x[1] > y[0]) || (x[0] > y[0] && y[1] > x[0])) {
					newArr.push([Math.max(x[0], y[0]), Math.max(x[1], y[1])]);
				}
			}
		}
	}

	return newArr;
};

module.exports = {
	combineIntervals,
};
