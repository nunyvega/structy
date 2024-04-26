const knightAttack = (n, kr, kc, pr, pc) => {
	// todo
	const visited = new Set();

	const queue = [];
	queue.push([kr, kc, 0]);

	while (queue.length > 0) {
		const [r, c, mc] = queue.shift();
		if (checkInsideBoard(n, r, c) === false) continue;

		const posString = `${r},${c}`;
		if (visited.has(posString)) continue;
		visited.add(posString);

		if (r === pr && c === pc) return mc;
		queue.push(
			[r - 2, c - 1, mc + 1],
			[r - 2, c + 1, mc + 1],
			[r - 1, c - 2, mc + 1],
			[r - 1, c + 2, mc + 1],
			[r + 1, c - 2, mc + 1],
			[r + 1, c + 2, mc + 1],
			[r + 2, c - 1, mc + 1],
			[r + 2, c + 1, mc + 1]
		);
	}
	return null;
};

const checkInsideBoard = (n, r, c) => {
	if (r < 0 || r >= n || c < 0 || c >= n) return false;
	return true;
};

module.exports = {
	knightAttack,
};
