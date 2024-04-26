// Recursive fib with memoization
const fib = (n, memo = {}) => {
	if (n === 0 || n === 1) return n;
	if (n in memo) return memo[n];

	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

	return memo[n];
};

// Fib with loop
const fib2 = (n) => {
	// todo
	if (n === 0 || n === 1) return n;
	let sequence = [0, 1];
	let count = 2;
	while (count < n) {
		sequence.push(sequence[count - 2] + sequence[count - 1]);
		count++;
	}

	return sequence[n - 2] + sequence[n - 1];
};

module.exports = {
	fib,
};
