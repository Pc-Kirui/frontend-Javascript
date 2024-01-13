"use strict";

//Scope and scope chain
function calcAge(birthYear) {
  const age = 2067 - birthYear;

  function printAge() {
    let output = `You are ${age},born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Joyline";

      //Reassigning outer scope's variable
      output = "NEW OUTPUT";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Patrick";
calcAge(1989);

// Hoisting and TDZ in Javascript
//Vaiables hoisting
console.log(me);
// console.log(job);
// console.log(year);

var me = "Patrick";
let job = "soldier";
const year = 1989;

//Functions hoisting
console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
var addExp = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

//this keyword in practice
console.log(this);

const calculateAge = function (birthYear) {
  console.log(2070 - birthYear);
  console.log(this);
};
calculateAge(1989);

const calculateAgeArrow = (birthYear) => {
  console.log(2070 - birthYear);
  console.log(this);
};
calculateAgeArrow(1986);

const patrick = {
  year: 1989,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
patrick.calcAge();

const susan = {
  year: 1991,
};
susan.calcAge = patrick.calcAge;
susan.calcAge();

//Primitives Vs Objects
//primitive types
let lastName = "Patrick";
let oldLastName = lastName;
lastName = "Kirui";
console.log(lastName, oldLastName);

//reference types
const joyline = {
  firstName: "Joyline",
  lastName: "Chepkorir",
  age: 27,
};
const marriedJoyline = joyline;
marriedJoyline.lastName = "Langat";
console.log("Before marriage:", joyline);
console.log("After marriage:", marriedJoyline);

//copying objects
const joyline2 = {
  firstName: "Joyline",
  lastName: "Chepkorir",
  age: 27,
  family: ["Beatrice", "Susan"],
};
const joylineCopy = Object.assign({}, joyline2);
console.log(joylineCopy);
joylineCopy.lastName = "Langat";

joylineCopy.family.push("Faith");
joylineCopy.family.push("Denno");

console.log("Before marriage:", joyline2);
console.log("After marriage:", joylineCopy);
