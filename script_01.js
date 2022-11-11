"use strict";

/***** Funktionen 01 *****/

// Kapselung von Codeblöcken

//Funktionsaufruf (call)
//test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo Max")
}

/*********** Funktionen 02a ***********/
// 2a. Parametrisierung + Datenübergabe von INNEN

ausgabeNamen();

function ausgabeNamen() {
    let firstname = "Meik";
    console.log("Hallo "+ firstname + " !");
    }
    