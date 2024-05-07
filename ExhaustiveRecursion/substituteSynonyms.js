const substituteSynonyms = (sentence, synonyms) => {
	if (sentence.length === 0) return [""];
	const arr = sentence.split(" ");
	const variations = [];
	if (arr[0] in synonyms) {
		for (let synonym of synonyms[arr[0]]) {
			const results = substituteSynonyms(arr.slice(1).join(" "), synonyms);

			for (let result of results) {
				if (result == "") {
					variations.push(synonym);
				} else {
					variations.push(synonym + " " + result);
				}
			}
		}
	} else {
		const results = substituteSynonyms(arr.slice(1).join(" "), synonyms);

		for (let result of results) {
			result ? variations.push(arr[0] + " " + result) : variations.push(arr[0]);
		}
	}

	return variations;
};

substituteSynonyms(sentence, synonyms);

module.exports = {
	substituteSynonyms,
};
