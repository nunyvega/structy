const pairedParentheses = (str) => {
  let l = 0;
  let openCount = 0;

  while (l < str.length) {
    if (str[l] === "(") openCount++;
    if (str[l] === ")") {
      if (openCount === 0) return false;
      openCount--;
    }
    l++;
  }

  if (openCount > 0) return false;
  return true;
};

module.exports = {
  pairedParentheses,
};
