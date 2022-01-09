/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printName() {
    console.log("Mohammad Alansari");
}

printName();

function printAge(birthYear) {
    age = (2022 - birthYear);
    console.log(age);
}

printAge(1996);

function printHello(name, language) {
    if (language === "en"){
    console.log(`Hello ${name}`);
    
    } else if (language === "es") {
        console.log(`Hola ${name}`);
    } else if (language === "fr") {
        console.log(`Bonjour ${name}`);
    } else if (language === "tr") {
        console.log(`Merhaba ${name}`);
    } else {
        console.log("Please choose another language");
    }

}

printHello("Mohammad", "es");

function printMax(firstNum, secondNum) {
    if (firstNum > secondNum) {
        console.log(`The bigger number is ${firstNum}`);
    } else if (secondNum > firstNum) {
        console.log(`The bigger number is ${secondNum}`); 
    } else {
        console.log("the numbers are equal");
    }
}

printMax(36, 20);