const decompressBraces = (s) => {
  const stack = [];
  for (let char of s) {
    if (char !== "{" && char !== "}") stack.push(char);
    if (char === "}") {
      let current = stack.pop();
      let segment = "";
      while (!Number.isInteger(Number(current))) {
        segment = current + segment;
        current = stack.pop();
      }
      while (current > 0) {
        stack.push(segment);
        current--;
      }
    }
  }

  let string = "";
  while (stack.length > 0) {
    let current = stack.pop();
    string = current + string;
  }
  return string;
};

module.exports = {
  decompressBraces,
};
