let proxy = new Proxy(
  {},
  {
    get(target, property) {
      return 22;
    }
  }
);

console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.c);
console.log(proxy.d);
