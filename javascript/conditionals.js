
// IF STATEMENT
var name = "Billy";
if (name === "Billy") {
    alert("Hi Billy!");
}

//ELSE STATEMENT
if (name === "Billy") {
    alert("Hi Billy!");
} else {
    alert("hmmm, I don't know you");
}

//ELSE IF STATEMENT
if (name === "Billy") {
  alert("Hi Billy!");
} else if (name === "Susy") {
  alert("Hi Susy!");
}

//IF, ELSE IF, ELSE STATEMENT
if (name === "Billy") {
  alert("Hi Billy!");
} else if (name === "Susy") {
  alert("Hi Susy!");
} else {
  alert("I don't know you");
}

//LOGICAL OPERATORS ( && || ! ) 

// || (OR) OPERATOR
if (name === "Billy" || name === "Ann") {
  alert("Hi Billy or Ann!");
}

// && (AND) OPERATION (BOTH CONDITIONS HAVE TO BE MET
if (name === "Billy" && name === "Ann") {
  alert("Hi Billy or Ann!");
}

// Scenario of using && Operation for both First and Last name. 
if (firstName === "Bob" && lastName === "Smith") {
  alert("Hi Bob Smith");
}

if (firstName === "Bob" && lastName === "Smith") {
  alert("Hi Bob Smith");
} else {
  alert("You are not Bob Smith.");
}

// ! OPERATOR (DOES NOT) 
if (!(name === "Bob")) {
  alert("No Bob's Allowed."); 
}

!true
//false

!false 
//true
