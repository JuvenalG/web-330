/*
============================================
; Title:  Exercise 1.3
; Author: Professor Krasso
; Date:   August 10 2020
; Modified By: Juvenal Gonzalez
; Description: Create a JavaScript program with conditional statements that contain two errors.
;===========================================
*/

const header = require('../gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 1.3"));
//Cellphone object with four properties and 3 methods that output the properties
function Cellphone(manufacturer, model, color, price){
this.manufacturer = manufacturer;
this.model = model;
this.color = color;
this.price = price;
//Setter methods that return the properties
this.getPrice = function()
{
    return price;
};

this.getModel = function(){
    return model;
};
//returns all the properties and uses the setter methods
this.getDetails = function(){
    return " Manufacturer: " + manufacturer +  "\n Model: " + this.getModel() + "\n Color: " + color + "\n Price: $" + this.getPrice();
};

}
//aPhone instance of Cellphone object with properties passed as parameters
var aPhone = new Cellphone("Nokia", "brick", "gold", "50");
//output using method within the aPhone object
console.log(aPhone.getDetails());