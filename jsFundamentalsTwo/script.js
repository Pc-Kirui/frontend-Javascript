"use strict";

// let hasDriversLicence = false;
// const passedTest = true;

// if(passedTest) hasDriversLicence = true;
// if(hasDriversLicence) console.log("He can drive: D!");

// function logger() {
//     console.log("My name is PcKirui.");
// }
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(3, 4);
// console.log(appleOrangeJuice);

//Arrow functions
// const calcAge = birthYear => 2040 - birthYear;
// const age = calcAge(1989);
// console.log(age);

// const calcRetirement = (birthYear, firstName) => {
//     const age = 2050 - birthYear;
//     const retirementAge = 65 - age;
//     // return retirementAge;
//     return `${firstName} retires in ${retirementAge} years.`;
// }
// console.log(calcRetirement(2000, "Patrick"));

//coding challenge #5
// const calcAverage = (teamScoreOne, teamScoreTwo, teamScoreThree) => (teamScoreOne + teamScoreTwo + teamScoreThree) / 3;

// //test data one
// let avgKoalas = calcAverage(44, 23, 71);
// let avgDolphins = calcAverage(65, 54, 49);
// console.log(avgKoalas, avgDolphins);

// function checkWinner(avgDolphins,avgKoalas) {
//     if(avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins wins (${avgDolphins} Vs ${avgKoalas})`);
//     }
//     else if(avgKoalas >= 2 * avgDolphins)  {
//         console.log(`Koalas wins (${avgKoalas} Vs ${avgDolphins})`);
//     }
//     else {
//         console.log("No team wins...!");
//     }
// }

// checkWinner(avgDolphins, avgKoalas);
// checkWinner(576, 111);

// //test data two
// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);
// console.log(avgKoalas, avgDolphins);
// checkWinner(avgDolphins, avgKoalas);

//coding challenge #6
// function calcTip(billValue) {
//     let tip;
//     if(billValue >= 50 && billValue <= 300) {
//         return tip = 0.15 * billValue;
//     }
//     else {
//         return tip = 0.2 * billValue;
//     }
//     // console.log(tip);
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
// console.log(bills, tips, totals);
// // calcTip(100);

//objects: dot vs bracket notation
// const patos = {
//     firstName: "Patrick",
//     lastName: "Kirui",
//     age: 2068 - 1989,
//     job: "soldier",
//     friends: ['roy', 'mike', 'ray']
// };
// console.log(patos);
// console.log(patos.lastName);
// console.log(patos['friends']);

// const interestedIn = prompt(`What would you like to know about Patos? Choose between firstName, lastName, age, job or friends.`);
// console.log(interestedIn);
// console.log(patos[interestedIn]);
// console.log(`${patos.firstName} has ${patos.friends.length} friends, and his best friend is called ${patos.friends[1]}`);

//coding challenge #7 - objects to implement calculations
// const marks = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height *this.height);
//         return this.bmi;
//     }
// };

// const johns = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height *this.height);
//         return this.bmi;
//     }
// };

// marks.calcBMI();
// johns.calcBMI();
// console.log(marks.bmi, johns.bmi);

// if(marks.bmi > johns.bmi){
//     console.log(`${marks.fullName}'s BMI (${marks.bmi}) is higher than ${johns.fullName} (${johns.bmi})`);
// }
// else {
//     console.log(`${johns.fullName}'s BMI (${johns.bmi}) is higher than ${marks.fullName} (${marks.bmi})`);
// }

//arrays
// const patos = [
//     'Patrick',
//     'Kirui',
//     2050 - 1989,
//     'Soldier',
//     ['Ray', 'Michael', 'Peter'],
//     true
// ]
// for(let i = patos.length; i >= 0; i--) {
//     console.log(i, patos[i]);
// }

// const types = [];

// for(let i = 0; i < patos.length; i++) {
//     if(typeof patos[i] !== "string") continue;
//     console.log(patos[i], typeof patos[i]);

//     // types[i] = typeof patos[i];
//     types.push(typeof patos[i]);
// }
// console.log(types);

//coding challenge #8
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (billValue) {
//   return billValue >= 50 && billValue <= 300
//     ? billValue * 0.15
//     : billValue * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   const total = tip + bills[i];
//   tips.push(tip);
//   totals.push(total);
// }
// console.log(bills, tips, totals);

// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let average = sum / arr.length;
//   console.log(`Total sum: ${sum}`);
//   console.log(`Average: ${average}`);
// }
// calcAverage(bills);
// calcAverage(tips);
// calcAverage(totals);

/*Problem: We work for a company building a smart home thermometer. Our most recent work is this: "Given an array of temperatures of one day calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."*/

//Understanding the problem.

/*what is temp amplitude? Difference between highest ans lowest temp in the array.
How to compute max and min temperatures?
What is sensor error? and what to do? */

//Breaking into subproblems
/*How to ignore errors
find max value in temp arrays
find min value in temp array
subtract min from max (amplitude and return it) */
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const tempAmplitude = function (arr) {
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     const currentTemp = arr[i];
//     if (typeof currentTemp !== "number") continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = tempAmplitude(temperatures);
// console.log(amplitude);

//Debugging(fixing errors)
// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",

//     //Fix the bug:converting to a number
//     value: Number(prompt("Degrees celsius:")),
//   };
//   //find the bug
//   console.table(measurement);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

//Coding challenge #9
//function takes an array and logs in a string to the console

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

console.log(`... ${temps1[0]}*C ... ${temps1[1]}*C ...${temps1[2]}*C..`);
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}*C in ${i + 1} days ...`;
  }
  console.log("..." + str);
};
printForecast(temps1);
printForecast(temps2);
