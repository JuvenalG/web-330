/*
============================================
; Title:  Assignment 3.4
; Author: Richard Krasso
; Date:   August 24 2020
; Modified By: Juvenal Gonzalez
; Description: Create a web server that responds to requests
; for 6 different ejs pages
;===========================================
*/

const header = require('/users/mrjuv/bu-webdev/web-340/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Portfolio"));

//includes these modules
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
const { fstat } = require('fs');
//applies express library
var app = express();
//tell js where to find views directory
app.set('views', path.resolve(__dirname, 'views'));
//set ejs view engine
app.set('view engine', 'ejs');
//logger set up
app.use(logger('short'));
//listens to http requests and displays the given message 
//onto the message tag that corresponds with the file path
//after the domain

// app.use("/route", express.static("foldername"));
app.use('/public', express.static('public'));

app.get("/", function(request,response){
    response.render("index", {
        message: "Home Page"


    });
});

app.get("/about", function(request,response){
    response.render("about", {
        message: "About Page"
    });
});


//creates server and displays verification message
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});