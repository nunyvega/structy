const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  if (i >= nums.length) return 0;
  if (i in memo) return memo[i];

  let exclude = nonAdjacentSum(nums, i + 1, memo);
  let include = nums[i] + nonAdjacentSum(nums, i + 2, memo);

  memo[i] = Math.max(include, exclude);
  return memo[i];
};

