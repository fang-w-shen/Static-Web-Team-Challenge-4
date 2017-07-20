var list = document.getElementsByClassName('box');

for (var i = 0; i < list.length; i++) {
	list[i].addEventListener("click",place);
}

var counter = 1;
function place() {

	if (counter>0) {
		this.innerHTML = `<p class="red">X</p>`;
		counter-=1;
		this.removeEventListener("click",place);
	}
	else {
		this.innerHTML = `<p class="blue">O</p>`;
		counter+=1;
		this.removeEventListener("click",place);
	}
	checkifwin();

}

var b11 = document.getElementById("11");
var b12 = document.getElementById("12");
var b13 = document.getElementById("13");
var b21 = document.getElementById("21");
var b22 = document.getElementById("22");
var b23 = document.getElementById("23");
var b31 = document.getElementById("31");
var b32 = document.getElementById("32");
var b33 = document.getElementById("33");
var x = "X";
var o = "O";
var b = "b";

	

/*function checkifwin() {
	for (var z = 1; z < 4; z++) {
		var j = b+1+1;
		
			if ( `${j}`.firstChild.innerHTML === "X" ) {
				alert(z);
				alert("win");
			}
	
	}	
}*/
var turns = 0;
var won = 0;
function checkifwin() {
var name1 = document.getElementById("name1").value;	
var name2 = document.getElementById("name2").value;
var z = [];
z.push(b11,b12,b13,b21,b22,b23,b31,b32,b33);	
	if (z[0].firstChild.innerHTML === x && z[4].firstChild.innerHTML === x && z[8].firstChild.innerHTML === x) {
			alert(name1+" Wins!");
			won=1;
			remove();
			replay();
	}
	else if (z[2].firstChild.innerHTML === x && z[4].firstChild.innerHTML === x && z[6].firstChild.innerHTML === x) {
			alert(name1+" Wins!");
			won=1;
			remove();
			replay();
	}
	else if (z[0].firstChild.innerHTML === o && z[4].firstChild.innerHTML === o && z[8].firstChild.innerHTML === o) {
			alert(name2+" Wins!");
			won=1;
			remove();
			replay();
	}
	else if (z[2].firstChild.innerHTML === o && z[4].firstChild.innerHTML === o && z[6].firstChild.innerHTML === o) {
			alert(name2+" Wins!");
			won=1;
			remove();
			replay();
	}
	else {
		for (var j = 0; j<3; j++) {
			if (z[j].firstChild.innerHTML === x && z[j+3].firstChild.innerHTML === x && z[j+6].firstChild.innerHTML === x) {
				alert(name1+" Wins!");
				won=1;
				remove();
				replay();
			}
			else if (z[j].firstChild.innerHTML === o && z[j+3].firstChild.innerHTML === o && z[j+6].firstChild.innerHTML === o) {
				alert(name2+" Wins!");
				won=1;
				remove();
				replay();
			}
		}
		for (var j = 0; j<7; j=j+3) {
			if (z[j].firstChild.innerHTML === x && z[j+1].firstChild.innerHTML === x && z[j+2].firstChild.innerHTML === x) {
				alert(name1+" Wins!");
				won=1;
				remove();
				replay();
			}
			else if (z[j].firstChild.innerHTML === o && z[j+1].firstChild.innerHTML === o && z[j+2].firstChild.innerHTML === o) {
				alert(name2+" Wins!");
				won=1;
				remove();
				replay();
			}
		}
		turns+=1
		if (turns> 8 && won !== 1) {
			alert("It's a TIE!");
			replay();
		}
		
	}
		
	
		
}

function remove() {
	for (var i = 0; i < list.length; i++) {
			list[i].removeEventListener("click",place);
	}	
}

function replay() {
	var x = document.createElement("input");
	x.type = "button";
	x.value = "Play Again"
	var button = document.getElementsByClassName("container")[0].appendChild(x);
	button.addEventListener("click", () => {
		for (var i = 0; i < list.length; i++) {
			list[i].firstChild.innerHTML="";
		}
		document.getElementsByClassName("container")[0].removeChild(x);
		for (var i = 0; i < list.length; i++) {
			list[i].addEventListener("click",place);
		}
		z=[];
		counter=1;
		turns=0;
		won=0;
	});
		
}