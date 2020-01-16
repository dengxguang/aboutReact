var tom = {
    name: "Tom",
    gender: "male"
};
// 只读属性不能编辑
tom.id = 2222; // error TS2540: Cannot assign to 'id' because it is a read-only property.
