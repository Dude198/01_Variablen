"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hallo");
// console.log(firstName);

/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName = "Mütze"; // Deklaration + Wertzuweisung
// console.log(familyName); // Ausgabe
// console.log(firstName + " " + familyName);

/***** 03 Deklaration + Wertzuweisung II *******/

// let firstName, familyName;
// firstName = prompt("Bitte Vornamen eingeben:");
// familyName = prompt("Bitte Namen eingeben:");
// console.log(firstName + " " + familyName);

/* JS ist eine untypisierte Sprache! | untyped */

// let test;
// test = "Hi";
// test = 2;
// test = true;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test); // Ausgabe

/***** 03a Konstanten *******/

// const test = "Hi"; // Variable mit KONSTANTEM Inhalt
// // test = "Hallo"; // KEINE neue ZUweisung zur Laufzeit möglich! --> Fehler
// console.log("Inhalt: " + test); // Ausgabe

/***** 04 Beispiel *******/

// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

// Wertzuweisung
ageJohn = 25;
ageMark = 30;

let year = 2022;

// Berechnung
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

// Ausgabe
console.log("birthYearJohn: " + birthYearJohn);
console.log("birthYearMark: " + birthYearMark);



