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

//ausgabeNamen();
// console.log(firstname); //Fehler: Scope

function ausgabeNamen() {
    let firstname = "Meik";
    console.log("Hallo "+ firstname + " !");
    }

    /************ Funktionen 02b  **********/
    // 2b. Parametisierung + Datenübergabe von AUSSEN

    // ausgabeNamenParam(prompt("Geben sie einen Namen ein: ")); //Argument
    // Argumente sind Daten für Parameter

    function ausgabeNamenParam(firstname)
    {
        console.log("Hallo "+ firstname + " !");
    }

    /******** Funktionen 02c  **********/
    // 2c Mehrere Parameter

    ausgabeNamenParams("Meik","Huber"); // Argumente
    ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?")); //Argumente

    function ausgabeNamenParams(firstName,familyName) // Parameter
    {
        console.log("hallo "+firstName + " "+familyName + " !");
    }