//m total rows n total cols
//r start row c start col
//k moves left
const breakingBoundaries = (m, n, k, r, c, memo = {}) => {
    const key = r + ','+ c +',' + k
    if (key in memo) return memo[key]
    if (k < 0) return 0;
    if (outOfBoundaries(m,n,r,c)) return 1;
    
    memo[key] = 0;
    const stepsLeft = k - 1;
    memo[key]+= breakingBoundaries (m, n, stepsLeft, r-1, c, memo);
    memo[key]+= breakingBoundaries (m, n, stepsLeft, r+1, c, memo);
    memo[key]+= breakingBoundaries (m, n, stepsLeft, r, c-1, memo);
    memo[key]+= breakingBoundaries (m, n, stepsLeft, r, c+1, memo);
    return memo[key];
    
  };
  
  const outOfBoundaries = (m, n, r, c)=> {
    if (r < 0 || r >= m) return true;
    if (c < 0 || c >= n) return true;
    return false;
  }
  
  breakingBoundaries(3, 4, 2, 0, 0); // -> 4
  
  module.exports = {
    breakingBoundaries,
  };
  