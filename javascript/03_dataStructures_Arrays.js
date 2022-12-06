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
                           
//JAVASCRIPT ARRAY REFERENCE

concat() //joins arrays and returns an array with joined arrays
constructor //returns the function that created the Array objects prototype 
copyWithin() //copies array elements within the array, to and from specified positions
entries() //returns a key/value pair Array Iteration Object
every() // checks if every element in an array pass a test 
fill() // fill the elements in an array with a static value 
filter() //creates a new array with every element in an array that pass a test 
find() // returns the value of the first element in an array that pass a test
findIndex() //returns the index of the first element in an array that pass a test
forEach() // calls a function for each array element 
form() // creates an array from an object
includes() // check if an array contains the specified element
indexOf() // search the array for an element and returns it's position
isArray()  // checks whether an object is an array 
join() // joins all elements of an array into a string
keys() // returns a Array Iteration Object, containing the keys of the original array 
lastIndex() // search the array for an element, starting at the end, and returns it's position
length() // sets or returns the number of elements in an array
map() // creats a new array with the result of colling a function for each array element 
pop() // removes the last element of an array, and returns the element 
prototype() //allows you to add properties and methods to an Array object 
push() //adds new elements to the end of an array, and returns the new length
reduce() // reduce the values of an array to a single value (going left to right) 
reduceRight() // reduce the values of an array to a single value (going right to left) 
reverse() //reverses the order of the elements in an array 
shift() // removes the first elements of an array, and returns that element 
slice() // selects part of an array, and returns the new array 
some() // checks if any of the elements in an array pass a test 
sort() // sorts the elements in an array 
splice() // alls/removes elements from an array 
toString() // converts an array to a string, and returns the result 
unshift() // adds new elements tp the beginning of an array, returns the new length 
valueOf() // returns the primitive value of an array 

