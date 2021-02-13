const person = {
  name: "blu",
  age: 23,
  number: 9876789876,
  greet: () => {
    console.log("hi...");
  },
};

console.log(person);

person.greet();

const hobbies = ["abc", "def", "ghi", "jkl", "mno", "pqr"];
for (let h of hobbies) console.log(h);

console.log(
  hobbies.map((h) => {
    return "hobby:" + h;
  })
);

const copiedperson = { ...person };
console.log(copiedperson);

const copiedArray = [...hobbies];
console.log(copiedArray);

const day = (...args) => {
  return args;
};
console.log(
  day("sunday", "monday", "tuesday", "wednday", "thursday", "friday")
);
