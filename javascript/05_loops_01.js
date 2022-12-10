//LOOPS 

// i FOR "INDEX" - common convention to use in "for" loops. 
for (initialExpression; condition, incrementExpression) 
//condition which compares the value i with something else (the conditional). loop will run as long as this condition evaluates to true
// initialExpression - declare an initialized variable (i) 
  for (let i = 0; i < 5; i++) {
  console.log('Hello World')
}
//This will repeat "hello world" 5 times. "as long as i is less then 5, increment by 1" 
//as long as i is less than 5 this loop will run 

//below, as long as it is less than or equal to 5, it will run.

for (let i = 0; i =< 5; i++) {
  if (i % 2 !== 0) 
    console.log(i)
}

// if the remainder of division of i by 2 is not 0, that means it is an odd number.

//MODULO EXPLAINATION 

<number> % <modulus> => <remainder> 
  
// takes a number and maps it to the range based on the remainder when you divide that number. 
// for odd numbers between 0-5 divided by 2, anything landing on 0 would be even and anything landing on 1 would be odd. 
// this means, 0 (2,4) and 1 (1,3,5) 
  
//if modulo 2 were a clock, there would only be 2 parameters which would be 0 or 1. 

  var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy",
  ];

todos.length
//5

//as long as i is less than todos.length (todos length), i++
//as long as i is less than 5 (todos length), add an increment of 1
//will increment by 1 until the loop has hit it's 5th increment
for (var i = 0; i < todos.length; i++) {
  console.log(i);
}

//0
//1
//2
//3
//4
// 4 instead of 5 because index starts at 0

//if we wanted to manipulate the data during the loop
console.log(todos[i]);

for (var i = 0; i < todos.length; i++) {
  todos[i] = todos[i] + "!";
}
//above: todos = todos[0,1,2,3,4] + "!"

//WHILE LOOP

//counting up to 10 with counterTop = 0 
var counterOne = 0;
while (counterOne < 10) {
  console.log(counterOne);
  counterOne++
}

//counting down from 10 with counterTop = 10 
var counterOne = 10;
while (counterOne > 0) {
  console.log(counterOne);
  counterOne--;
}

//WARNING: counting from 10 to infinity, will cause browser to crash
//INFINITE LOOP
var counterOne = 10;
while (counterOne > 0) {
  console.log(counterOne);
  counterOne++;
}

//do while Loop
//while loops will check the condition first, and the do while loop will do the action first and then check condition.
var counterTwo = 10 
do {
  console.log(counterTwo);
  counterTwo--;
} while (counterTwo > 0); 

//forEach 

var todosLength = todos.length;

for (var i=0; i < todosLength; i++) {
  console.log(todos[i], i);
}

todos.forEach(function(i) {
  console.log(i);
}
// above is essentially below with i standing in for the todo but is essentially todo. 
              
todos.forEach(function(todo, i) {
  console.log(todo, i);
})
//** REMEMBER: the last bracket is after the entire function 


//BELOW: is a simple way to use a defined function with a line of a forEach loop
function logTodos(todo, i) {
  console.log(todo, i);
}

todos.forEach(logTodos);
//REMEMBER: to check if new JS functions are available in all browsers/browser compatible, must be compatible with all
//most browsers. 
