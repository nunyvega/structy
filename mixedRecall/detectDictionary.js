const detectDictionary = (dictionary, alphabet) => {
	const charIndexObj = {};

	alphabet.split("").forEach((letter, index) => {
		if (!charIndexObj.hasOwnProperty(letter)) charIndexObj[letter] = index;
	});

	let wordIndex = 0;
	let letterIndex = 0;
	while (wordIndex < dictionary.length - 1) {
		//create a const for each word being compared
		const [first, second] = [dictionary[wordIndex], dictionary[wordIndex + 1]];

		// move to next comparison if words are the same or
		if (first === second || !first[letterIndex]) {
			wordIndex++;
			letterIndex = 0;
			continue;
		}
		// return false if we run out of letters from second word
		if (!second[letterIndex]) return false;
		if (first[letterIndex] === second[letterIndex]) {
			letterIndex++;
			continue;
		}
		if (charIndexObj[first[letterIndex]] > charIndexObj[second[letterIndex]])
			return false;

		letterIndex = 0;
		wordIndex++;
	}

	return true;
};

module.exports = {
	detectDictionary,
};
