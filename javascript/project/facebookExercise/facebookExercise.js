// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

//==========================================================================================================

var user = {
  username: "Danie",
  password: "12345",
} 

database = [
  {
    user,
  }
]

//OR

database = [
  {
    username: "danie",
    password: "12345",
  }
]

newsfeed = [
  {
    username: "danie",
    timeline: "timeline01",
  },
  {
    username: "joy",
    timeline: "timeline02",
  },
  {
    username: "al",
    timeline: "timeline03",
  }
]
