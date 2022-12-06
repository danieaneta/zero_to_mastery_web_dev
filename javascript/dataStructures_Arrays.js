var list = ["tiger", "cat", "bear", "bird"];
console.log(list[0]);

var numbers = [1,2,3,4]

var booleans = [true, false, true]; 

var functionList = [function apple() {
  console.log("Apple");
}]

//MIXED LIST: STRING, NUMBER/INTEGER, BOOLEAN, FUNCTION. MIXED LISTS ARE NOT ADVISED BUT AVAILABLE TO USE. 
var mixedList = ["apples", 3, undefined, true, function apple() {
  console.log("Apple");
}}


//ARRAYS WITHIN ARRAY
//NOTE: each array has indexes. 
                 
 var list = [
  ["tiger", "cat", "bear", "bird"]                
];

console.log(list[0][2]); //selecting "bear" 

list.shift() //Shifts 0 

list.pop() //Shifts last 

list.push("elephant"); // adds to list 

list.concat (["bee", "deer"]) // adds to list but needs to be assigned to a variable to be permanent. 
//EXAMPLE: 

var myList = ["cat", "bear", "elepant", "bee", "deer"]; 

var myNewList = myList.concat(["monkey"]);
                           
