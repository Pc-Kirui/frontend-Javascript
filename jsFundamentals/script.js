// Coding challenge #1
// const marksHeight = 1.69; //height in meters
// const marksMass = 78; //mass in kgs

// const johnsHeight = 1.95;
// const johnsMass = 92;

// const marksHeight = 1.88; //height in meters
// const marksMass = 95; //mass in kgs

// const johnsHeight = 1.76;
// const johnsMass = 85;


// const marksBMI = marksMass / (marksHeight ** 2);
// const johnsBMI = johnsMass / (johnsHeight ** 2);

// const markHigherBMI = marksBMI > johnsBMI;
// console.log(marksBMI, johnsBMI, markHigherBMI);

// if (marksBMI > johnsBMI) {
//     // console.log("Marks BMI is higher than john's!");
//     console.log(`Mark's BMI(${marksBMI}) is higher than John's(${johnsBMI})`);
// }
// else {
//     // console.log("Johns BMI is higher than Mark's!");
//     console.log(`John's BMI(${johnsBMI}) is higher than Mark's(${marksBMI})`);
// }
// const firstName = 'Patrick';
// const birthYear = '1989';
// const year = '2066';
// const job = 'Diver';
// const pato = "I'm " + firstName + ", a " + (year - birthYear) + ' year old ' + job + "!";
// console.log(pato);

// const patoNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(patoNew);

// const age = 14;
// const isOldEnough = age > 18;
// if(isOldEnough) {
//     console.log('Susan can start driving classes.');
// }
// else {
//     const yearsLeft = 18 - age;
//     console.log(`Susan is too young! Wait another ${yearsLeft} years to start driving classes.`);
// }
// console.log(Boolean(0));
// console.log(Boolean('Patrick'));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// const favorite = Number(prompt("What is your favorite number?"));
// console.log(favorite);
// if(favorite == 23) {
//     console.log("Cool: 23 is an amazing number.");
// }
// const hasDriversLicence = true; //A
// const hasGoodVision = true; //B
// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// const shouldDrive = hasDriversLicence && hasGoodVision;
// if(shouldDrive) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Someone else should drive.");
// }

//coding challenge #3
// const dolphinsScoreFirstRound = 96;
// const dolphinsScoreSecondRound = 108;
// const dolphinsScoreThirdRound = 89;

// const dolphinsScoreFirstRound = 90;
// const dolphinsScoreSecondRound = 108;
// const dolphinsScoreThirdRound = 100;

// const koalasScoreFirstRound = 88;
// const koalasScoreSecondRound = 91;
// const koalasScoreThirdRound = 110;

// const koalasScoreFirstRound = 91;
// const koalasScoreSecondRound = 95;
// const koalasScoreThirdRound = 112;

// const averageScoreDolphins = (dolphinsScoreFirstRound + dolphinsScoreSecondRound + dolphinsScoreThirdRound )/ 3;
// const averageScoreKoalas = (koalasScoreFirstRound + koalasScoreSecondRound + koalasScoreThirdRound )/ 3;
// console.log(averageScoreDolphins, averageScoreKoalas);

// if((averageScoreDolphins === averageScoreKoalas) && (averageScoreDolphins >= 100) && (averageScoreKoalas >= 100)) {
//     console.log("No winner! They have the same average score.");
// }
// else if((averageScoreDolphins > averageScoreKoalas) && (averageScoreDolphins >= 100)) {
//     console.log("Dolphins Wins the trophy!");
// }
// else if((averageScoreKoalas > averageScoreDolphins) && (averageScoreKoalas >= 100)) {
//     console.log("Koalas Wins the trophy!");
// }
// else {
//     console.log("There is no winner!");
// }

//Ternary operator
const bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const totalValue = bill + tip;
const string = `The bill was ${bill}, the tip was ${tip} and the total value ${totalValue}.`
console.log(string);
