let name = "张三";
let app = {
  name,
  run() {
    console.log(`${this.name}在跑步`);
  }
};

console.log(app.run());
