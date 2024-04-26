const fiveSort = (nums) => {
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		if (nums[right] === 5) {
			right--;
		} else {
			if (nums[left] === 5)
				[nums[left], nums[right]] = [nums[right], nums[left]];
			left++;
		}
	}
	return nums;
};

/*
  test_00 [PASS] 64ms 
  test_01 [PASS] 61ms 
  test_02 [PASS] 65ms 
  test_03 [PASS] 63ms 
  test_04 [PASS] 58ms 
  test_05 [PASS] 921ms 
  const fiveSort = (nums) => {
  
    for (let x = nums.length - 1; x >= 0; x--){
      if (nums[x] == 5){
        nums.splice(x,1);
        nums.push(5);
      }
    }
    return nums
  };
  */
module.exports = {
	fiveSort,
};
