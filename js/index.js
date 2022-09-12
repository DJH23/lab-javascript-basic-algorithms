// Iteration 1: Names and Input//

var hacker1;
console.log(`The driver's name is ${hacker1}`)

var hacker2;
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

let driverName;
let navigatorName;

driverName = "Darren";
navigatorName = "Diego";

        if (driverName.length > navigatorName.length) {
        console.log(`The driver has the longest name, it has ${driverName.length} characters.`)  
    } else if (driverName.length < navigatorName.length) {
        console.log(`It seems that the navigator has the longest name, it has ${navigatorName.length} characters.`)
    } else {
        console.log(`Wow, you both have equally long names, ${driverName.length} characters!`)
    }

// Iteration 3: Loops

let uppercaseAndSplit = driverName.toUpperCase().split("").join(" ");
    
console.log(uppercaseAndSplit);


/*function reverseString(navigatorName) {
    console.log(navigatorName.split('').reverse().join(''));
}*/

/*let reversedName = "";
for (let i = studentName.length - 1; i >= 0; i--) {
    reversedName += studentName[i];
}
console.log(reversedName);*/
    
   /* if (driverName.localeCompare > navigatorName.localeCompare) {
        console.log(`The driver's name goes first.`)  
    } else if (driverName.localeCompare < navigatorName.localeCompare) {
        console.log(`Yo, the navigator goes first definitely.`)
    } else {
        console.log(`What?! You both have the same name?`)
    }*/

    if (driverName.localeCompare(navigatorName) === 1) {
        console.log(`The driver's name goes first.`);
    } else if (driverName === navigatorName) {
        console.log(`What?! You both have the same name?`);
    } else {
        console.log(`Yo, the navigator goes first definitely.`);
    }