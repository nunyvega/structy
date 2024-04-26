const mostFrequentChar = (s) => {
	const obj = {};
	let mostFrequent = s[0];
	let highestCount = 0;
	let iter = 0;
	s = s.split("");

	s.forEach((x) => {
		iter++;
		if (!obj.hasOwnProperty(x)) {
			obj[x] = { count: 1, ind: iter };
		} else {
			obj[x].count++;

			if (
				obj[x].count > highestCount ||
				(obj[x].count == highestCount && obj[x].ind < obj[mostFrequent].ind)
			) {
				highestCount = obj[x].count;
				mostFrequent = x;
			}
		}
	});
	return mostFrequent;
};

module.exports = {
	mostFrequentChar,
};
