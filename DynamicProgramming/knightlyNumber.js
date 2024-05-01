const knightlyNumber = (n, m, kr, kc, pr, pc) => {
  const memo = {};
  const movements = [
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [-1, 2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
  ];
  return explore(n, m, kr, kc, pr, pc, memo, movements);
};

const explore = (n, m, kr, kc, pr, pc, memo, mov) => {
  if (kr >= n || kc >= n || kr < 0 || kc < 0) return 0;
  if (m === 0) {
    if (kr === pr && kc === pc) return 1;
    return 0;
  }
  const str = kr + "," + kc + "," + m;
  if (str in memo) return memo[str];

  memo[str] = 0;
  for (let mo of mov) {
    const [r, c] = mo;
    memo[str] += explore(n, m - 1, kr + r, kc + c, pr, pc, memo, mov);
  }
  return memo[str];
};

module.exports = {
  knightlyNumber,
};
