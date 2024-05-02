const nestingScore = (str) => {
  const stack = [0];

  for (let char of str) {
    if (char === "[") stack.push(0);
    if (char === "]") {
      const top = stack.pop();
      if (top === 0) {
        const toPush = stack.pop() + 1;
        stack.push(toPush);
      } else {
        const toPush = stack.pop() + top * 2;
        stack.push(toPush);
      }
    }
  }
  return stack[0];
};

module.exports = {
  nestingScore,
};
