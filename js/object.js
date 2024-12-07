const presedent = {
  firstName: "Donald",
  lastName: "Tramp",
  age: 60,

  isPresedentNow: true,
  awards: [""],

  esestent: {
    firstName: "Bill",
    lastName: "Tramp",
    age: 50,
    position: "esistent",
  },
};

console.log(presedent.firstName);
console.log(presedent.esestent.age);
console.log(presedent["esestent"]["position"]);

const param = "age";

console.log(presedent[param]);

const one = "is";
const two = "Presedent";
const three = "Now";

console.log(presedent[one + two + three]);

presedent.age = 61;

console.log(presedent);

presedent.married = true;

presedent.awards.push("full");

console.log(presedent);
