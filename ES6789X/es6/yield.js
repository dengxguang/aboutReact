function* countAppleSales() {
  for (var i = 0; true; i++) {
    var reset = yield i;
    console.log("reset: " + reset);
    if (reset) {
      i = -1;
    }
  }
}

var myArr = countAppleSales();
console.log(myArr.next());
console.log(myArr.next());
console.log(myArr.next());
console.log(myArr.next());
console.log(myArr.next());
console.log(myArr.next(true)); //  next 参数是一个状体done,如果为true，表示已经结束
