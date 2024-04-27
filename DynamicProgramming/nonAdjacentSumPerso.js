const nonAdjacentSum = (nums, memo = {}) => {
    if (nums.length === 0) return 0;

    const str = String(nums);
    if (str in memo) return memo[str]

    let rightHand = nonAdjacentSum(nums.slice(1), memo);
    let leftHand = nums[0] + nonAdjacentSum(nums.slice(2), memo);

    memo[str] = Math.max(leftHand, rightHand);
    return memo[str]
};

module.exports = {
    nonAdjacentSum,
};
