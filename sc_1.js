let kol = document.querySelectorAll(".Ins_Rask");

arr = []; //Длины каждого из классов
brr = []; //имена классов .slidesX
crr = []; //номера отображаемых слайдов

function Zero2(){
	for (let i = 0; i < kol.length+1; i += 1) {
	let Name2 = ".slides"+i; 						
	let slide = document.querySelectorAll(Name2);	
	brr[i-1] = Name2;
	arr[i-1] = slide.length+1;
	crr[i-1] = 1;	}		}

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

function Zero(){
	for (let i = 0; i < kol.length; i++) {
	ShowSli(brr[i], crr[i]-1,i+1);
	let elem = document.querySelectorAll(brr[i]);
	
	elem[0].style.display = "block";}
	
	console.log(arr,brr,crr);}

function FiltX(a) {
	var F1 = document.getElementById("F");
	var F2 = document.getElementById("X");
	if (a == 1) {
	X.style.display = "block";
	F.style.display = "flex";	}
	else {
	Zero2();
	X.style.display = "none";
	F.style.display = "none";}
	}

// Show Current Slide (number X)

function SCSl(X){
	FiltX(1);
	Zero2();
	for (let i = 1; i < X; i++){
	PreSli(1);
	}
	}

for (let i = 1; i < kol.length+1; i += 1) {
	let Name2 = ".slides"+i; 						
	let slide = document.querySelectorAll(Name2);	
	brr[i-1] = Name2;
	arr[i-1] = slide.length+1;
	crr[i-1] = 1;	}

for (let i = 0; i < kol.length; i++) {
	ShowSli(brr[i], crr[i]-1,i+1);
	let elem = document.querySelectorAll(brr[i]);
	
	elem[0].style.display = "block";}
	
	console.log(arr,brr,crr);
