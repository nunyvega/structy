const sumPossible = (amount, numbers, memo = {}) => {
    if (amount === 0) return true;
    if (amount < 0) return false;
  
    if (amount in memo) return memo[amount];
  
    memo[amount] = false;
    for (number of numbers) {
      let res = sumPossible(amount - number, numbers, memo);
      if ( res === true ) {
        memo[amount] = true;
        return true
      }
    }
    return memo[amount];
  };
  
  module.exports = {
    sumPossible,
  };
  