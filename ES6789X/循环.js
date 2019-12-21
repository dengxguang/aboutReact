// map取出数据
// forEach改变数据源
const orderList = [
  { oid: "ON0001", pid: "PN0001", pname: "蘸酱短袖", clinet: "杨过", total: 100, date: "2019-07-10" },
  { oid: "ON0002", pid: "PN0002", pname: "椒盐短袖", clinet: "小龙女", total: 122, date: "2019-07-10" },
  { oid: "ON0003", pid: "PN0001", pname: "蘸酱短袖", clinet: "郭襄", total: 100, date: "2019-07-14" },
  { oid: "ON0004", pid: "PN0003", pname: "炭炙短袖", clinet: "郭襄", total: 137, date: "2019-07-18" },
  { oid: "ON0005", pid: "PN0001", pname: "蘸酱短袖", clinet: "小龙女", total: 100, date: "2019-07-20" }
];

// map取出数据
const oIds = orderList.map(each => each.pid);
// console.log(oIds); //[ 'ON0001', 'ON0002', 'ON0003', 'ON0004', 'ON0005' ]

// forEach改变数据源
orderList.forEach(each => (each.isCP = false));
// console.log(orderList);

// orderList.every(each => {
//   ["杨过", "小龙女"].includes(each.clinet) && (each.isCP = true);
//   console.log(each);
// });

// orderList.some(each => (each.total % 2 ? true : (each.total -= 5)));
// console.log(orderList);
