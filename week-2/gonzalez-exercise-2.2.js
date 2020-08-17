/*
============================================
; Title:  Exercise 2.2
; Author: Professor Krasso
; Date:   August 17 2020
; Modified By: Juvenal Gonzalez
; Description: Create an object that is redifined with 
; new properties but that also inherits the origal objecs properties
;===========================================
*/

const header = require('../gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 2.2"));
//object constructor
var person = {
    getAge: function(){
    return this.age;
    }
};
//objects initialzed with new properties
var chris = Object.create(person,{
    "age":
    {
        "value": "33"
    }

});

var robert = Object.create(person,{
    "age":
    {
            "value": "46"
    },
    "fullname":
    {
            "value": "Robert Lezowski"
    }
});
//output using getAge() function
console.log("Age:", robert.getAge());
//output of inserted properties 
console.log("Full name: '%s'", robert.fullname);
//calls property instead of method
console.log("The person's age is '%s'", robert.age);
//reuse of getAge() function on another object
console.log("Age:", chris.getAge());