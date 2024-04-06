const compress = (s) => {
    let result = []
    let left = 0;
    let right = 0;
    
    while (left < s.length){
      if (s[left]== s[right]){
        right++
      } else {
        if ( right - left != 1 ) result.push(right - left);
        result.push(s[left]);
        left = right;
      }
    }
  
    return result.join('');
  };
  
  module.exports = {
    compress,
  };
  