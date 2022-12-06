// () calls the function

//FUNCTION NOTES

alert() 

prompt() 

// alert
// ƒ alert() { [native code] }

alert("Hello")
// ("Hello") is the argument to the function
alert("Hello" , "How are you")
// Can have multiple arguments for a function 

//FUNCTION DECLARATION

//METHOD 1 

function sayHello () {
	console.log("Hello");
}

sayHello();

//METHOD 2 - ANONYMOUS FUNCTION (FUNCTION WITH NO NAME BUT STORED IN VARIABLE)

var sayBye = function () {
	console.log("Bye")
}

sayBye(); 

//METHOD 2 NOTE: FUNCTIONS CAN STILL BE NAMED WITHIN VARIABLES IF SPECIFIED

var sayBye = function byebye(){
	console.log("Bye")
}

//WHY USE ARGUMENTS


//Before using arguments
function sing() {
	console.log("AHHHHHHH")
	console.log("DEEEEEEE")
}

sing();

function sing2() {
	console.log("LAAA DEE")
	console.log("DAAAAAAA")
}

sing2();

//After using arguments. Input can be dynamic and less dependant on having to write repetative code.

function sing(song) {
	console.log(song);
}

sing("laaaa deeee")
sing("Helloooooooo")

function multiply (a, b) {
	return a * b
}

multiply(2, 2);

//program exits once we write return, we can manipulate this using the conditinal statements and logical operators

function multiply(a,b) {
	if (a > 10 || b > 10) {
		return "that's too hard"
	} else {
		return a*b 
	}
	return a*b
}

alert(multiply(3, 4))

