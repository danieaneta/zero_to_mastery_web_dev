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
    timeline: "Blahblahblahhh",
  },
  {
    username: "joy",
    timeline: "Hellooooo",
  },
  {
    username: "al",
    timeline: "Hi",
  }
]

//LOGIN SYSTEM

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
  if (user === database[0].username && 
      pass === database[0].password) {
      console.log(newsFeed);
  } else {
      alert("Sorry, wrong username or password.")
  }    
}

signIn(userNamePrompt, passwordPrompt);
