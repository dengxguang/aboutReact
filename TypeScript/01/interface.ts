interface IPerson {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: IPerson = {
  id: 111,
  name: "Tom",
  gender: "male"
};
