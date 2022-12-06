// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

function checkDriverAge() {
  prompt("What is your age?"); 
}

checkDriverAge()

var checkedAge = function checkDriverAge2(){
  prompt("What is your age?");
}

checkedAge() 

if (Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//BONUS: 

function checkDriverAge(age) {
	if (Number(age) < 18) {
		console.log("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 18) {
		console.log("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		console.log("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
checkDriverAge(92);
it returns "Powering On. Enjoy the ride!"
