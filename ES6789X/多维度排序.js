// 基础数据
const products = [{ name: "椒盐T恤", price: 3, style: "Japanese" }, { name: "蘸酱短袖", price: 5, style: "Chinese" }, { name: "碳炙短袖", price: 4, style: "Chinese" }, { name: "印花短袖", price: 8, style: "England" }, { name: "写意短袖", price: 3, style: "Chinese" }, { name: "清蒸T恤", price: 4, style: "Japanese" }];

// 定义不同的排序规则
const byPrice = (a, b) => a.price - b.price;
const byStyle = (a, b) => (a.style > b.style ? 1 : a.style === b.style ? 0 : -1);

// 利用reduce组合排序
const sortByFlattened = fns => (a, b) => fns.reduce((acc, fn) => acc || fn(a, b), 0);

// 组合后的排序函数，排序优先级按数组内元素位置编号
const byPriceStyle = sortByFlattened([byPrice, byStyle]);

// 先按照价格升序，再按款式升序
console.log(products.sort(byPriceStyle));
