const overlapSubsequence = (str1, str2, memo = {}) => {
  if (str1.length === 0 || str2.length === 0) return 0;

  const strMemo = JSON.stringify(str1) + "," + JSON.stringify(str2);
  if (strMemo in memo) return memo[strMemo];
  memo[strMemo] = 0;
  if (str1[0] === str2[0])
    memo[strMemo] += 1 + overlapSubsequence(str1.slice(1), str2.slice(1), memo);
  else {
    const left = overlapSubsequence(str1, str2.slice(1), memo);
    const right = overlapSubsequence(str1.slice(1), str2, memo);
    memo[strMemo] += Math.max(left, right);
  }
  return memo[strMemo];
};

module.exports = {
  overlapSubsequence,
};
