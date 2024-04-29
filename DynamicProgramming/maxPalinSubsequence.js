const maxPalinSubsequence = (str, memo = {}) => {
  if (str.length === 0) return 0;
  if (str.length === 1) return 1;

  if (str in memo) return memo[str];

  memo[str] = 0;
  if (str[0] === str[str.length - 1]) {
    memo[str] += 2;
    memo[str] += maxPalinSubsequence(str.slice(1, str.length - 1), memo);
  } else {
    let left = maxPalinSubsequence(str.slice(1), memo);
    let right = maxPalinSubsequence(str.slice(0, str.length - 1), memo);

    memo[str] += Math.max(left, right);
  }
  return memo[str];
};

module.exports = {
  maxPalinSubsequence,
};
