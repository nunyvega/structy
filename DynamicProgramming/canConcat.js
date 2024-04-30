const canConcat = (s, words, memo = {}) => {
    if (s in memo) return memo[s]
    if (s.length === 0 ) return true;
    
    memo[s] = false
    for (word of words) {
      if (s.startsWith(word)){
        const suffix = s.slice(word.length);
        if (canConcat(suffix, words, memo) === true){
          memo[s] = true;
          return true;
        }
      }
    }
  
    return memo[s] ;
  };
  
  module.exports = {
    canConcat,
  };
  