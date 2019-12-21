var first = "d",
  last = "xg";
var name = "Your name is " + first + " " + last + ".";

// 在ES6中通过${}就可以完成字符串的拼接，只需要将变量放在大括号之中。
var name1 = `Your name is ${first} ${last}.`;

console.log(name);
console.log(name1);
