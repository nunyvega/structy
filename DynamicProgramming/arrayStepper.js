const arrayStepper = (nums, i = 0, memo = {}) => {
  if (i >= nums.length) return false;
  if (i === nums.length - 1) return true;
  if (i in memo) return memo[i];

  let possibilities = nums[i];
  memo[i] = false;
  while (possibilities > 0) {
    if (arrayStepper(nums, i + possibilities, memo) === true) {
      memo[i] = true;
      break;
    }
    possibilities--;
  }
  return memo[i];
};

module.exports = {
  arrayStepper,
};
