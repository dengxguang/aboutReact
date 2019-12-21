let sum = (a, b) => {
  return a + b;
};

console.log(sum(2, 3));

let defaultParam = (a = 2, b = 4) => {
  return a + b;
};

console.log(defaultParam());
console.log(defaultParam(1, 1));
