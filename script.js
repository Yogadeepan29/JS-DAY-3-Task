//! TASK-1:

let obj1 = { name: "Person 1", age: 5 }; // Question-1
let obj2 = { age: 5, name: "Person 1" };

str1 = JSON.stringify(obj1, Object.keys(obj1).sort()); // Converting objects to strings & Sort property names within the strings
str2 = JSON.stringify(obj2, Object.keys(obj2).sort());

if (str1 === str2) {
  console.log("Objects are equivalent."); // Compare sorted strings
} else {
  console.log("Objects are not equivalent.");
}

//! TASK-2:

var request = new XMLHttpRequest(); //creating XHR Object

request.open("GET", "https://restcountries.com/v3.1/all", true); //openning connection to server

request.send(); // initiating a bridge to server (sending request)

//server response
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].flags.png);
  }

  //! TASK-3:
  // used the same API declared for Task-2
  //server response
  for (var j = 0; j < result.length; j++) {
    console.log(
      "Countryname :" + " " + result[j].name.common,
      ",",
      "Region :" + " " + result[j].region,
      ",",
      "Subregion :" + " " + result[j].subregion,
      ",",
      "Population :" + " " + result[j].population
    );
  }
};
