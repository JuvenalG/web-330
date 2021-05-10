/*
; Title:  Personal Portfolio
; Author: Juvenal Gonzalez
; Date:   September 07 2020
; Portfolio to showcase coding capabilities
;===========================================
*/

//first function on introductory click that reveals
//links to images
function myFunction() {
  
	document.getElementsByClassName("center")[0].style.width="30%";
  
	document.getElementsByTagName("body")[0].style.backgroundImage = "url(images/background_1.gif)";
  
	document.getElementById("mainHeader").style.color="black";
  
	var links = document.getElementsByClassName("imgLink");
	for (var i = 0; i < links.length; i++) { 
                 links[i].style.display='initial';
				
      }
	links[0].style.display="block";
	document.getElementsByClassName("suit")[0].style.marginLeft="36%";
}
//secondary function that returns back to navigational screen
function myFunction2() {
  
	document.getElementsByClassName("center")[0].style.width="30%";
  
	document.getElementById("mainHeader").style.display="block";
  
	var links = document.getElementsByClassName("imgLink");
	for (var i = 0; i < links.length; i++) { 
                 links[i].style.display='initial';
				
      }
	links[0].style.display="block";
	document.getElementsByClassName("cardButton")[0].style.display="none";
	document.getElementsByClassName("suit")[0].style.display="initial";
	document.getElementById("gitLogo").style.display="inline";
	document.getElementsByClassName("profilePic")[0].style.display="none";
	document.getElementsByClassName("paragraph")[0].style.display="none";
	document.getElementsByClassName("back")[0].style.display="none";
	document.getElementsByClassName("back2")[0].style.display="none";
	document.getElementsByClassName("back3")[0].style.display="none";
	document.getElementsByClassName("certPage")[0].style.display="none";
	document.getElementsByClassName("cert")[0].style.left="auto";
	
}
//github link that reveals coding samples
function git(){
	
	document.getElementsByClassName("card")[0].style.display="block";
	document.getElementsByClassName("bio")[0].style.display="none";
	document.getElementsByClassName("cert")[0].style.display="none";
	document.getElementsByClassName("suit")[0].style.display="none";
	document.getElementsByClassName("btn-group-vertical")[0].style.display="block";
	document.getElementsByClassName("mainHeader")[0].style.display="none";
	document.getElementsByClassName("gitLogo")[0].style.display="none";
	document.getElementsByClassName("gitLogo2")[0].style.display="block";
	document.getElementsByClassName("back")[0].style.display="inline";
	document.getElementsByClassName("cardButton")[0].style.display="block";
	for(i = 1; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	
	
}
//bio link that shows small about me
function bioFunction(){
	
	document.getElementsByClassName("cert")[0].style.display="none";
	document.getElementsByClassName("suit")[0].style.display="none";
	document.getElementsByClassName("mainHeader")[0].style.display="none";
	document.getElementsByClassName("profilePic")[0].style.display="block";
	document.getElementsByClassName("back2")[0].style.display="inline";
	document.getElementsByClassName("gitLogo")[0].style.display="none";
	document.getElementsByClassName("paragraph")[0].style.display="block";
	
}
//certificate link that shows past collegiate ahievements
function certClick(){
	document.getElementsByClassName("bio")[0].style.display="none";
	document.getElementsByClassName("suit")[0].style.display="none";
	document.getElementsByClassName("mainHeader")[0].style.display="none";
	document.getElementsByClassName("back3")[0].style.display="block";
	document.getElementsByClassName("gitLogo")[0].style.display="none";
	document.getElementsByClassName("buttonCert")[0].style.display="block";
	document.getElementsByClassName("certCard")[0].style.display="block";
	document.getElementsByClassName("certPage")[0].style.display="block";
	document.getElementsByClassName("cert")[0].style.left="3%";
}
//switches that swap cards when their corresponding buttons are clicked	   
function switch1(){
	
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("bioCard")[0].style.display="block";
	
}
	
function switch2(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("bioProCard")[0].style.display="block";			
}
	   
function switch3(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("web231Card")[0].style.display="block";			
}
	
function switch4(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("portfolioCard")[0].style.display="block";			
}

function switch5(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("web330Card")[0].style.display="block";			
}

function switch6(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("githubCard")[0].style.display="block";			
}

function switch7(){
	var i;
	for(i = 0; i < 3; i++){
		document.getElementsByClassName("certCard")[i].style.display="none";
	}
	document.getElementsByClassName("certA")[0].style.display="block";			
}

function switch8(){
	var i;
	for(i = 0; i < 3; i++){
		document.getElementsByClassName("certCard")[i].style.display="none";
	}
	document.getElementsByClassName("certB")[0].style.display="block";			
}

function switch9(){
	var i;
	for(i = 0; i < 3; i++){
		document.getElementsByClassName("certCard")[i].style.display="none";
	}
	document.getElementsByClassName("certC")[0].style.display="block";			
}
	
function switch10(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("web335Diagrams")[0].style.display="block";			
}

function switch11(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("web335Card")[0].style.display="block";			
}

function switch12(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("web420Presentations")[0].style.display="block";			
}

function switch13(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("web420Card")[0].style.display="block";			
}

function switch14(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("web425")[0].style.display="block";			
}

function switch15(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("devPresentations")[0].style.display="block";			
}

function switch16(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("dev430")[0].style.display="block";			
}


function switch18(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("web425Lib")[0].style.display="block";			
}



function switch17(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("web425b")[0].style.display="block";			
}


function switch18(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("nodebucket")[0].style.display="block";			
}

function switch19(){
	var i;
	for(i = 0; i < 17; i++){
		document.getElementsByClassName("card")[i].style.display="none";
	}
	document.getElementsByClassName("bcrs")[0].style.display="block";			
}


