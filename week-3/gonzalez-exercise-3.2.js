/*
============================================
; Title:  Exercise 3.2
; Author: Professor Krasso
; Date:   August 23 2020
; Modified By: Juvenal Gonzalez
; Description: Create constructors for the oracle and informix objects
; and add if statements that will assign the proper class to these objects
; upon initialization.
;===========================================
*/

const header = require('../gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 3.2"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7;
}
//constructor for objects that has default values that will
//be assigned if not defined upon initialization.
function Oracle(properties){
    this.username = properties.username || 'gonzJuv';
    this.password = properties.password || "password$";
    this.server = properties.server    || "localhost:8080"; 
    this.version = properties.verson || "v20";
}

function Informix(properties) {
    this.username = properties.username || "supervisor";
    this.password = properties.password || "dataScience20";
    this.server = properties.server || "localhost:4040";
}
//empty object that will be used to add prototypes
function DatabaseFactory() {}
//createDatabase function that assigns the class of and
//assigns that object to the class passing the set properties
//into its constructor
DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === "MySql"){
        this.databaseClass = MySql;
    }
    if(properties.databaseType === "Oracle"){
        this.databaseClass = Oracle;
    }
    if(properties.databaseType === "Informix") {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

//uses data
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "admin",
    password: "admin"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "admin",
    password: "password"
});
//output to match expected output
console.log(oracle.constructor.name, "\n{");
for (var x in oracle){
    console.log(x+":", oracle[x]);
}

console.log("}\n"+ informix.constructor.name + "\n{");
for (var x in informix){
    console.log(x+":", informix[x]);
}
console.log("}")
// end program
