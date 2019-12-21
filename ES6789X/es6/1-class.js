class Animal {
  constructor(name, color) {
    // 构造函数，实例化的时候将会调用，如果不指定，那么会有一个不带参数的默认构造函数
    this.name = name;
    this.color = color;
  }

  // 在这里定义的方法， 是原型对象上的属性
  toString() {
    console.log(`name: ${this.name}, color: ${this.color}`);
  }
}

let animal = new Animal("dog", "white");
animal.toString();

console.log(animal.hasOwnProperty("name")); // true
console.log(animal.hasOwnProperty("toString")); //false ---> toSting是原型上的属性
console.log(animal.__proto__.hasOwnProperty("toString")); // true

class Cat extends Animal {
  constructor(action) {
    // 子类必须要在constructor中指定super 函数，否则在新建实例的时候会报错.
    // 如果没有置顶consructor,默认带super函数的constructor将会被添加、
    super("cat", "white");
    this.action = action; // catch
  }
  toString() {
    console.log(super.toString());
  }
}
let cat = new Cat("catch");
cat.toString(); // name: cat, color: white

console.log(cat instanceof Cat); // true
console.log(cat instanceof Animal); // true
