const anagrams = (s1, s2) => {
	s1 = s1.split("").sort();
	s2 = s2.split("").sort();

	if (JSON.stringify(s1) == JSON.stringify(s2)) {
		return true;
	}
	return false;
};

module.exports = {
	anagrams,
};
