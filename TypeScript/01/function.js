// // 函数声明
// function sum(x, y) {
//   return x + y;
// }
function reverse(x) {
    if (typeof x === "number") {
        return Number(x
            .toString()
            .split("")
            .reverse()
            .join(""));
    }
    else if (typeof x === "string") {
        return x
            .split("")
            .reverse()
            .join("");
    }
}
console.log(reverse(123));
console.log(reverse("hello"));
