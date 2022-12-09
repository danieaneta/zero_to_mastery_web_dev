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
