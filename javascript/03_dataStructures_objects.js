// Objects are collections of property.

var user = {
  name: "John",
  age: 34,
  hobby: "Soccer",
  isMarried: false,
}

//{name: 'John', age: 34, hobby: 'Soccer', isMarried: true, favouriteFood: 'spinach'}

user.name
user.age
user.hobby
user.isMarried

//ADDING TO PROPERTIES TO OBJECTS

user.favouriteFood = "spinach";

//UPDATING PROPERIES TO OBJECTS

user.isMarried = true;

//WE CAN PUT ARRAYS WITHIN OBJECTS

var user = {
  name: "John",
  age: 34,
  hobby: "Soccer",
  isMarried: false,
  spells: ["abrakabra", "shazam", "boo"],
  shout: function() {
    console.log("AHHHHHHH!")
  }
}

//WE CAN HAVE OBJECTS(USERS) WITHIN AN ARRAY

var list = [
  {
    username: "andy",
    password: "secret" 
  },
  {
    username: "jess",
    password: "123"
  }
];

//ACCESSING WITHIN ARRAYS AND OBJECTS

user.spells[1]
list[0].password
// Accessing a function within an object
//a function within an object is a method
user.shout()

//WE CAN HAVE EMPTY OBJECT
user2 = {}
//WE CAN HAVE EMPTY LISTS
list2 = [] 
