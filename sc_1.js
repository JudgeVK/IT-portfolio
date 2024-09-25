let kol = document.querySelectorAll(".Ins_Rask");

arr = []; //Длины каждого из классов
brr = []; //имена классов .slidesX
crr = []; //номера отображаемых слайдов

for (let i = 1; i < kol.length+1; i += 1) {
	let Name2 = ".slides"+i; 						
	let slide = document.querySelectorAll(Name2);	
	brr[i-1] = Name2;
	arr[i-1] = slide.length+1;
	crr[i-1] = 1;	}

function ShowSli(csName,cs,num1) {
	for (let i = 1; i< arr[num1-1]; i++){
		let elem = document.querySelectorAll(csName);
		let k = i-1;
		elem[k].style.display = "block";
		
		if (cs == i-1) {
			elem[i-1].style.display = "block";
					}
		else {
			elem[i-1].style.display = "none";	}	}}

function PreSli(num1) {
	classSlideName = brr[num1-1];
	crr[num1-1] = 	(crr[num1-1] + 1) % arr[num1-1];
	console.log(classSlideName);
	console.log(crr[num1-1]);
		ShowSli(classSlideName, crr[num1-1]-1, num1);	}

function NexSli(num1) {
	classSlideName = brr[num1-1];
	crr[num1-1] = 	(crr[num1-1] - 1 + arr[num1-1]) % arr[num1-1];
	console.log(classSlideName);
	console.log(crr[num1-1]);
		ShowSli(classSlideName, crr[num1-1]-1, num1);	}

for (let i = 0; i < kol.length; i++) {
ShowSli(brr[i], crr[i]-1,i+1);
let elem = document.querySelectorAll(brr[i]);

elem[0].style.display = "block";}

console.log(arr,brr,crr);


/*
// FILTER
var Filt = document.getElementById("Filt");
var F1 = 0;
function FiltHide(b){var Filt = document.getElementById("Filt");
F1=F1+b;
if (F1==3){Filt.style.display = "block";}
else{Filt.style.display = "none";};}
FiltHide(F1);

// HIDERS	h1
document.getElementById('hider1').onclick = function hide_1() {
var Filt = document.getElementById("Filt");
var element = document.getElementById("Rask");var butts = document.getElementById("hider1");
       if (element.style.display == "none"){element.style.display = "block"; FiltHide(-1);
			butts.style.background = "black";
			butts.style.color = "#f77f00";}
	   else {element.style.display = "none"; FiltHide(1);
			butts.style.background = "#f77f00";
			butts.style.color = "black";};}
//			h2
document.getElementById('hider2').onclick = function hide_1() {
var element = document.getElementById("Illustrations");var butts = document.getElementById("hider2");
       if (element.style.display == "none"){element.style.display = "block"; FiltHide(-1);
			butts.style.background = "black";
			butts.style.color = "#f77f00";}
	   else {element.style.display = "none"; FiltHide(1);
			butts.style.background = "#f77f00";
			butts.style.color = "black";};}
//			h3
document.getElementById('hider3').onclick = function hide_1() {
var element = document.getElementById("Other");var butts = document.getElementById("hider3");
       if (element.style.display == "none"){element.style.display = "block";  FiltHide(-1);
	   	butts.style.background = "black";
		butts.style.color = "#f77f00";}
	   else {element.style.display = "none";  FiltHide(1);
			butts.style.background = "#f77f00";
			butts.style.color = "black";};}
*/