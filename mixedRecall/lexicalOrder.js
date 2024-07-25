const lexicalOrder = (word1, word2, alphabet) => {
  const alphabetIndex = {};

  alphabet.split("").forEach((value, index) => {
    if (!alphabetIndex.hasOwnProperty(value)) {
      alphabetIndex[value] = index;
    }
  });

  let iter = 0;
  while (iter < word1.length) {
    if (word2[iter] === undefined) return false;
    if (word1[iter] !== word2[iter]) {
      return alphabetIndex[word1[iter]] < alphabetIndex[word2[iter]];
    }
    iter++;
  }
  return true;
};

module.exports = {
  lexicalOrder,
};
