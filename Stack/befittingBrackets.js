const befittingBrackets = (str) => {
  const bracketSet = new Set(["(", "{", "[", ")", "}", "]"]);
  const stack = [];

  for (let char of str) {
    if (bracketSet.has(char)) {
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else {
        if (stack.length === 0) return false;
        const curr = stack.pop();
        if (char === ")" && curr !== "(") return false;
        if (char === "}" && curr !== "{") return false;
        if (char === "]" && curr !== "[") return false;
      }
    }
  }
  return stack.length === 0;
};

module.exports = {
  befittingBrackets,
};
