let isDone: boolean = false;
console.log(isDone);

/**
 * boolean.ts:4:5 - error TS2322: Type 'Boolean' is not assignable to type 'boolean'.
'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
 */
// let createByNewBoolean: boolean = new Boolean(1);

// 返回一个boolean类型
let createdByBoolean: boolean = Boolean(1);
