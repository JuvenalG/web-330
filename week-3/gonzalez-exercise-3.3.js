/*
============================================
; Title:  Exercise 3.3
; Author: Professor Krasso
; Date:   August 23 2020
; Modified By: Juvenal Gonzalez
; Description: Use the singleton pattern to create an 
;===========================================
*/

const header = require('../gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 3.3"));


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

//function that creates an instance of the object if 
//there is not one present and returns the already created instance if 
//one is already created making sure only one version of the object is 
//active at a time
var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
         var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
             return instance;
        }
    }
})();
//initiates two objects with the getInstance() function
//returning the first object into the second object ensuring
//that only one instance is active
function databaseSingeltonTest()
{ 
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

console.log("Same database instance? %s ", oracle === postgres);
}
//Runs databaseSingleton function and returns output if both
//objects match.
databaseSingeltonTest();

// end program