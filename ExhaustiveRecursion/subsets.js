const subsets = (elements) => {
	if (elements.length === 0) return [[]]; // base case, no queda nada? arr vacio
  
   const firstElem = elements[0];
	const allTheRest = elements.slice(1);
	const withoutFirst = subsets(allTheRest);
	const withFirst = withoutFirst.map(arr => [firstElem, ...arr])
  
	return [...withoutFirst, ...withFirst]
  
  }/* How it works
  [a,b] => 
		  without First => b 
							=> without First []
							=> with first [b]
							[[], [b]]
		  with first =>  [[a], [a,b] ]
	returns [[], [b], [a], [a,b]]
	*/
	
  
  const subsets2 = (elements, subsetsArray = [[]], memo = {}) => {
	if (elements.length === 0) return subsetsArray;
	const str = String(elements);
	if (str in memo) return subsetsArray;
	memo[str] = subsetsArray;
	
	subsetsArray.push(elements);
	for (let x = 0; x < elements.length; x++) {
	  const newArr = [...elements];
	  newArr.splice(x,1);
	  subsets(newArr, subsetsArray, memo);
	}
  
	return   memo[str] ;
  };
  
  
  
  
  module.exports = {
	subsets,
  };
  