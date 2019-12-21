// let arr = [{ a: "进项", b: "增值", d1: "2019-02-02", d2: "2019-02-05" }, { a: "进项", b: "运费", d1: "2019-01-01", d2: "2019-02-01" }, { a: "进项", b: "增值", d1: "2019-04-01", d2: "2019-04-02" }, { a: "销项", b: "运费", d1: "2019-03-01", d2: "2019-03-05" }];

// const sortFn = str => {
//   return (a, b) => {
//     let val1 = new Date(a[str]).getTime();
//     let val2 = new Date(b[str]).getTime();
//     return val1 - val2;
//   };
// };
// arr.sort(sortFn("d1"));

// arr.forEach(item=>{
//   if(item.a+item.b=="进项增值"){

//   }
//   if(item.a+item.b=="进项运费"){

//   }
//   if(item.a+item.b=="销项增值"){

//   }
//   if(item.a+item.b=="销项运费"){

//   }

// });

// const vaildstopDate = (prevDate, curDate) => {
//   let sysDate = new Date().getTime();
//   let date = new Date(curDate).getTime();
//   let prev = new Date(prevDate).getTime();
//   if (prev >= sysDate && date >= prev) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(vaildstopDate("2019-08-03", "2019-09-03"));
// let days = [
//   "2016-02-28",
//   "2016-02-29", // 闰月
//   "2016-03-01", // 跨月
//   "2016-03-02",
//   "2016-03-03"
// ];

// // 先排序，然后转时间戳
// let _days = days.sort().map((d, i) => {
//   let dt = new Date(d);
//   dt.setDate(dt.getDate() + 4 - i); // 处理为相同日期

//   return +dt;
// });

// // 比较时间戳是否一致
// console.log(_days[0] == _days[1] && _days[0] == _days[2] && _days[0] == _days[3] && _days[0] == _days[4]);

// const comtinuDate = (d1, d2) => {
//   let day1 = new Date(d1).setDate(new Date(d1).getDate());
//   let day2 = new Date(d2).setDate(new Date(d2).getDate() - 1);
//   return day1 === day2;
// };
// console.log(comtinuDate("2019-03-31", "2019-04-01"));

/**
 * 日期比较
 */
// let DateUtils = require("./date");
// const startUse = startDate => {
//   let curDate = DateUtils.formatDate(new Date(), "yyyy-MM-dd");
//   let startTime = DateUtils.formatDate(startDate, "yyyy-MM-dd");
//   if (DateUtils.getCurTimer(curDate) >= DateUtils.getCurTimer(startTime)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// if (startUse("2019-07-15")) {
//   console.log("已启用");
// } else {
//   console.log("未启用");
// }
