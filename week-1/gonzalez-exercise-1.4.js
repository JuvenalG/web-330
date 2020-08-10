/*
============================================
; Title:  Exercise 1.4
; Author: Juvenal gonzalez
; Date:   August 10 2020
; Modified By: Juvenal Gonzalez
; Description: Create a JavaScript program using the Duck typing methodology that implements
; a interface structure that is easily modifiable
;===========================================
*/

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/


const header = require('../gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 1.4"));

// start program
//function contructor initialization
function Car(model){
    this.model = model;
}

function Truck(model,year){
    this.model = model;
    this.year = year;
}

function Jeep(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
}
//Start protoype method initialization
Car.prototype.start = function() {
    console.log( "Car added to the racetrack!");
   };

Truck.prototype.start = function() {
    console.log( "Truck added to the racetrack!");
   };

Jeep.prototype.start = function() {
    console.log( "Jeep added to the racetrack!");
   };
//empty array to store objects
var raceTrack = []
//function that calls the start method to output indication 0f object creation
//and inserts the object into the array
function driveIt(vehicle){
    vehicle.start();
    raceTrack.push(vehicle);
};
//initialization of objects with set properties
var honda = new Car("Civic");
var Chevy = new Truck("Silverado", 2014);
var Jeep = new Jeep("Cherokee", 2006, "red");
//pushes the objects into the array and outputs a message
driveIt(honda);
driveIt(Chevy);
driveIt(Jeep);

console.log("\n -- The following vehicles have been added to the racetrack --")
//iterates array and outputs the model of each object
raceTrack.forEach(element => console.log(element.constructor.name + ":", element.model));


// end program


