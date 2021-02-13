const name = "maz";
let age = 123;
const number = 123456789;

const sum = (uname, age, number) => {
  return "name :" + uname + ", age:" + age + " ,number:  " + number;
};
console.log(sum(name, age, number));

const add = (a, b) => a + b;
console.log(add(2, 3));

const addRandom = () => 4 + 5 + 6;
console.log(addRandom());

const addOne = (a) => a + 5;
console.log(addOne(4));
