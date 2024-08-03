/*
// //Comparison Operators

//1 Equals to (==)

console.log(3==4)

let Greetings = "Hello"
let greetings = "Hello"

console.log("Hello" == "hello")
console.log(Greetings == greetings)


// //2 Less than (<)
console.log(6 % 3 == 0)

// //3 Greater than (>)

console.log(5>3)

// //4 Less than or equal to (<=)
console.log(3<=5)

// //5 Greater than equal (=>)

console.log(5>=3)

// //6 Strict equals (===)

// //example 1
console.log(2=="2")

// //example 2

console.log(2 === "2")

// //7. Not equal

console.log(5!=3)



//Conditional statements

// 1.if
      let age = 44;
      

       if(age>=18){
             console.log("Welcome you're allowed to enter")
       }

//2. if else
       if(age>=18){
             console.log("Welcome you're allowed to enter") 
       }else{
             console.log("Your age is below the allowed age")
       }
//3. Nested if else
      if(age>=45){
            console.log("You're too old to play rugby")
      }else if(age>=18){             
           console.log("Welcome you can play rugby!")
           
      }else{
            console.log("You are too young to play rugby")
      }


//4. switch

let day = 4;



switch (day) {
     case 0:
           console.log("Hooray it's Sunday")
           break;

     case 1: 
           console.log("Booo it's Monday")
           break;

     case 2: 
           console.log("Booo it's Tuesday")
           break;

     case 3: 
           console.log("Okaay it's Wednesday")
           break;      
     case 4: 
           console.log("Okaay it's Thursday")
           break;      
     case 5: 
           console.log("Yoooh it's Friday")
           break;      

     default:
           console.log("Hooray it's Sartuday")
           break;
}

//pasword

let password ="yourname";
let length = password.length

console.log(length)
if (length>=8){
      console.log('Valid password')
}else{
      console.log('Invalid password')
}

//marks

let marks =9;

if(marks>=90){
      console.log('A')
}else if(marks>=80){
      console.log('B')
}else if(marks>=70){
      console.log('C')
}else{
      console.log('D')
}

//checking even or odd number

let num =(3)
let num2 =(num % 2 === 0)
console.log(num2)

if(num2){
      console.log('Even')
}else {
      console.log('Odd')
}

//Functions
//eg 1
function buyMilk(money) {
      var bottle = 1.5;
      var cost = (money / bottle);
      cost = Math.floor(cost)

console.log("Buy " + cost +" bottles of milk" )
}

buyMilk(10)

//eg 2

function lifeInWeeks(age){
      var yearsLeft = (90 - age);
      var monthsLeft = (yearsLeft * 12);
      var weeksLeft = (yearsLeft * 52);
      var daysLeft = (yearsLeft * 365);
  console.log("You got, " + daysLeft + " days, " + weeksLeft + " weeks and " + monthsLeft + " months left.")    
}
lifeInWeeks(20)

//eg 3
//Return function

function bmiCalculator(weight, height){
      var bmi = weight / (height * height);
      return Math.round(bmi);
}

 var bmi = bmiCalculator(65, 1.8);
 console.log(bmi)

//Calculating percentage
//Percentage = (Given Value/Total Value) × 100

function percentage(given_value, total_value){

      var percent = (given_value / total_value) * 100;
      return Math.floor(percent);
}    

var percent = percentage(45, 80);
console.log(percent)

//Area of trapezoid = 

function trapezoidArea(B, b, h){
      var area = ((B + b) / 2) * h;
      return area;
}

var area = trapezoidArea(20, 15, 5);
console.log(area)

//Random number generation

var n =Math.random();
n = n *6;
n = Math.floor(n) + 1;

console.log(n)


//In form of an alert in percentage

prompt("What is your name?");
prompt("What is their name?");

var love = Math.random();
love = love * 100;
love = Math.floor(love) + 1;

console.log(love)

//combining operators

if (love >= 65){
      alert("Your love score is : " + love + "%" + " keep up you doig well.")
} else if (love >= 45 && love <=65) {
      alert("Your love score is : " + love + "%" + " Average try to spice it up.")
} else {
      alert("Your love score is : " + love + "%" + " Stop forcing issues.")
}


//Leap Year Challenge

function ifLeapYear(year){
      if (year % 4 === 0){
            if (year % 100 === 0){
                  if (year % 400 === 0){
                        return "Leap year"
                  }else{
                        return "Not a leap year"
                  }
            }else{
                  return "Leap year"
            }
      }else{
            return "Not a leap year."
      }
}

console.log (ifLeapYear(2024))

//Collections working with arrays

var guest_list = ["James", "Michael", "Robert", "John", "David","Joseph", "Charles", "Anthony", "Paul", "Scott"];
var guestName = prompt("Whats your name?");
var status = guest_list.includes(guestName);

console.log (guest_list.includes(guestName))

if (status = true){
      alert ("welcome")
}else{
      alert ("Go home!")
}


// on multiple of 3 display Fizz
// on multiple of 5 display Buzz
//on multiple of 3 and 5 display FizzBuzz

var output = [];
var count = 1;

function fizzBuzz () {
      output.push (count);
      count++;
      if ( count % 3 === 0 && count % 5 === 0){
            output.push("FizzBuzz")
      }else if (count % 3 === 0){
            output.push("Fizz")
      }else if (count % 5 === 0){
            output.push("Buzz")
      }else {
            output.push(count)
      }

      console.log (output);
}


function who_is_to_pay_for_lunch(names){

var names = ["James", "Michael", "Robert", "John", "David","Joseph", "Charles", "Anthony", "Paul", "Scott"];

 var numberOfPeople = names.length; //Array length
 var randomPersonPosition = Math.floor (Math.random() * numberOfPeople); //Position for randomly chosen
 var randomPerson =names[randomPersonPosition]; //identification of the the chosen from the array

return randomPerson + " is going to buy lunch"
}

//Control statements While Loops

var output = [];
var count = 1;

function fizzBuzz () {
      
      count++;
      while(output <= 100) {
      if ( count % 3 === 0 && count % 5 === 0){
            output.push("FizzBuzz")
      }else if (count % 3 === 0){
            output.push("Fizz")
      }else if (count % 5 === 0){
            output.push("Buzz")
      }else {
            output.push(count)
      }
   
}

console.log (output.push);
}



var numberOfBottles = 99
while (numberOfBottles >= 1 ) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}



//Control statements For Loops
function fibanacciGenerator (n) {

      var output = [];
      if (n === 1){
            output = [0];
      }else if (n === 2 ){
            output = [0, 1];
      }else {
            output = [0, 1];
            for (var i = 2; i < n; i++){
           
            output.push(output[output.length - 2] + output[output.length - 1]);
          }
      }
 

            return output;
}
output = fibanacciGenerator (5)
console.log(output)


//creating a sequence that multiplies the last number of the sequence by two.

function sequence (x) {
      var output = [];
      if (x === 1) {
            output = [0];
      } else if (x === 2) {
            output = [1];
      }else {
            output =[0, 1];
            for (var y = 2; y < x; y++){
                  output.push (output [output.length - 1] * 2)
            }
      }

      return output;
}

output = sequence(10);
console.log(output)



//creating a sequence that substracts the third number from the  last number

function sequence (x) {
      var output = [];
      if (x === 1) {
            output = [0];
      } else if (x === 2) {
            output = [1];
      }else {
            output =[0, 1, 2, 3];
            for (var y = 2; y < x; y++){
                  output.push (output [output.length -1] - output[2] )
            }
      }

      return output;
}

output = sequence(10);
console.log(output)




//Using "For" loops


function sequence (x) {
      var output = [];
      if (x === 1) {
            output = [0];
      } else if (x === 2) {
            output = [1];
      }else {
            output =[0, 1, 2, 3];
            for (var y = 2; y < x; y++){
                  output.push (output [output.length -1] - output[2] )
            }
      }

      return output;
}

output = sequence(10);
console.log(output)


//A Simple Calculator Formula

function add (num1, num2){
      return num1 + num2;
  }
  
  function substract (num1, num2){
      return num1 - num2;
  }
  
  function multiply (num1, num2){
      return num1 * num2;
  }
  
  function divide (num1, num2){
      return num1 / num2;
  }
  
  function remainder (num1, num2){
      return num1 % num2;
  }
  
  function calculator (num1, num2, operator) {
      return operator(num1, num2);
  }
  
  console.log (calculator (11, 5, remainder))








const name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
let errorEle = document.getElementById("error")

form.addEventListener("submit", (e) => {
      let messages = [];
      if (name.value === "") {
           console.log(messages.push("Name is needed!")) 

      }

      if (password.value.length <= 6) {
            messages.push("Password must be longer!")
      }

      if (password.value.length >=17 ) {
            messages.push("Password must be shorter!")
      }

      if (password.value === "password" ) {
            messages.push("Password can't be set to password again")
      }

      if (messages.length > 0) {
            e.preventDefault() 
            errorEle.innerText = messages.join(", ") 
      }
      
})
*/
/******************************************/

//The array functions revision
console.log("/******** 1. .push() **********/")
// 1. .push()
// The push() method adds new items to the end of an array.
//The push() method changes the length of the array.
//The push() method returns the new length.

const fruitsArray = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitsArray);
let newfruitsArray= fruitsArray.push("lemmon", "berries");

/*if we*/ console.log(newfruitsArray) /*we expect to get the new length of our original array*/


/****************************************/
console.log("/********* 2. .pop() *********/")
// 2. .pop()
// The pop() method is used to remove the last element from an  array and returns that element.
//The pop() method changes the original array .
//The pop() method returns the element it removed.

const carTypes = ["fielder", "BMW", "Tesla", "Ford"];
let chosenCar= carTypes.pop();
console.log(carTypes)


/******************************************/
console.log("/******** 3. .shift() *********/")
// 3. .shift()
//shift() method removes the first element from an array and returns that removed element.
//This method changes the length of the array.
//The shift() method returns the shifted element.
//If the length property is 0, undefined is returned.

const fruits = ["Orange", "Banana", "Apple", "Mango"];
let chosenFruit = fruits.shift()
console.log(fruits)

console.log("/******** 4. .unshift() ********/")
// 4. .unshift()
// adds one or more elements to the beginning of an array.
//returns the new length of the array.
//The unshift() method overwrites the original array.

const carsModels = ["fielder", "BMW", "Tesla", "Ford"];
let newCarModels = carsModels.unshift("Harrier", "Hilux");
/*new array length = */ console.log(newCarModels);

//if multiple elements are passed as parameters, they're inserted in chunk at the beginning of the object, in the exact same order they were passed as parameters.

carsModels.unshift("Benz");
carsModels.unshift("Nissan CTR");
carsModels.unshift("Subaru");
console.log(carsModels)



/********************************************/
console.log("/********** 5. .slice() **********/")
// 5. .slice()
//The slice() method returns selected elements in an array, as a new array.
//The slice() method selects from a given start, up to a (not inclusive) given end.
const fiveCars = carsModels.slice(2, 9)
console.log(fiveCars)
//The slice() method does not change the original array.
console.log(carsModels)
//the end position by default is the last element
const lastCars = carsModels.slice(5)
console.log(lastCars)

/******************************************/
console.log("/********** 6. .splice() **********/")
//6. .splice()
//The splice() method removes array elements Returns an array containing the removed items (if any)..
let myFruitArray = ["Mango", "Banana","lemmonade", "Orange", "Apple", "Mango", "Mango"];
console.log(myFruitArray.lastIndexOf("Mango"))
let removedFruits = myFruitArray.splice(1, 3);
console.log(removedFruits);

//adds at position 0 remove one item and add kiwi and Returns an array containing the removed items (if any).
let addedfruits = myFruitArray.splice(0, 1, "Kiwi", "Lemon")
console.log(addedfruits)

//The splice() method overwrites the original array.
console.log(myFruitArray)

console.log("/********** 7. .lastIndexOf() **********/")
//7. lastIndexOf()
//returns the index from the beginning
//string.lastIndexOf(searchvalue, start)
//searchvalue = the string to search for
// start = The position where to start.

//Will return -1 if the value is not found
let text = "Have a d good day";
let result = text.lastIndexOf("day");
console.log(result)

//The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
let planetText = "The Planet earth is the planet to be in.";
let planetResult = planetText.lastIndexOf("planet");
console.log(planetResult)
//it is case sensitive
let planetsensitive = planetText.lastIndexOf("Planet");
console.log(planetsensitive)

/******************************************/
console.log("/********** 8. .indexOf() **********/")
//8. indexOf()
//array.indexOf(item, start)
//item = the value to search for
//start = where to start the search and by default the start is at 0 
let myfruits = ["Banana","lemmonade", "Orange", "Apple", "Mango"];
let indexOfMyFruits = myfruits.indexOf("Orange");
console.log(indexOfMyFruits)

//negative starts from the end but still from left to right
let ruits = ["Banana","lemmonade", "Orange", "Apple", "Mango"];
let indexOfFruits = ruits.indexOf("Apple", 2);
console.log(indexOfFruits)

//if the value is not found the return is -1
let fruitArray = ["Banana","lemmonade", "Orange", "Apple", "Mango"];
let myIndexOf = fruitArray.indexOf("guava");
console.log(myIndexOf)

console.log("/********** 9. .forEach() **********/")
//8. forEach()
//The forEach() method of Array instances executes a provided function once for each array element.
//The forEach() method is not executed for empty elements
//array.forEach(function(currentValue, index, arr), thisValue)
//function() = to run for each array element
//index = index of the current element
//arr = array of the current element
//returns undefined
const number = [65, 44, 12, 4];
number.forEach(multiply)

console.log(number)

function multiply(item,index,arr) {
  arr[index] = item * 10;
}

//adding each element to sum each time
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

console.log(sum)

function myFunction(item) {
  console.log(item)
  sum += item;
}

console.log("/**************** 10. .map() ****************/")

//8. map()
//map() creates a new array from calling a function for every array element.
const persons = [
  {
    firstName : "Malcom",
    lastName: "Reynolds"
  },
  {
    firstName : "Kaylee", 
    lastName: "Frye"
  },
  {
    firstName : "Jayne", 
    lastName: "Cobb"
  },
  {
    firstName : "Susan",
    lastName: "Steward"
  },
  {
    firstName : "Daniel",
    lastName: "Longbottom"
  },
  {
    firstName : "Jacob",
    lastName: "Black"
  }
];
persons.map(getFullName);

function getFullName(names, index, array) {
  //index = the index of each element in the array
  //console.log(index)
  //array = the array map method was called upon
  //console.log(array)
  //returns the result of the function for each array element
  return [console.log(names.firstName, names.lastName)]
}

//does not change the original array
console.log(persons)

persons.map(filterdNames)

function filterdNames(name, index) {
  if (name.firstName.length >= 6) {
    return (console.log(index))
  }
}

console.log('/************* 11. .filter() ***********/')

//11. filter()
//creates a new array filled with elements that pass a test provided by a function.
//does not execute the function for empty elements.
//returns = An array of elements that pass the test.
const ages = [10, 15, 30, 45, 55, 60, 21, 22, 33];
let ageResult = ages.filter(checkAldult)
function checkAldult(age) {
    return age >= 21;
}
console.log(ageResult);
console.log(ages);
//0r An empty array if no elements pass the test.
let overAge = ages.filter(checkOverAge);
function checkOverAge(age) {
  return age >= 61;
}
console.log(overAge);


console.log("/************** 12. .reduce() ************/")
//12. .reduce()
//executes a reducer function for array element.
const scores = [100, 15, 30, 45, 55, 60, 21, 22, 33];
let reducedScores = scores.reduce(reduceFunc,20)
function reduceFunc(i, cv, ci, array) {
  console.log(`returned Value: ${i}`)
  console.log(`currentValue: ${cv}`)
  console.log(`currentIndex: ${ci}`)
  console.log(array)
  return i - cv
}
// returns the accumulated result from the last call of the callback function.

console.log(reducedScores)
//Egzample 2
const people = [
  {
    firstName : "Malcom Reynolds",

    age: 20
  },
  {
    firstName : "Kaylee Frye", 

    age: 24
  },
  {
    firstName : "Jayne Cobb", 

    age: 36
  },
  {
    firstName : "Susan Steward",

    age: 46
  },
  {
    firstName : "Daniel Longbottom",

    age: 18
  },
  {
    firstName : "Jacob Black",

    age: 38
  }
];

let oldest = people.reduce(oldAge, 0)
function oldAge(rv, cv) {
    if (cv.age > rv){
      return cv.age
    }
    return rv
}
console.log(oldest)

const output = people.reduce(twoCharacters, "")
function twoCharacters(p, cv, ci, a) {
  let split = cv.firstName.split(" ");
  let parts = `${split[0][0]}${split[1][0]}`
  
  if (ci == a.length -1) {
      parts += "."
  } else {
      parts += ", "
  }
  return p + parts
}

console.log(output)

console.log("/************** 13. .some() ************/")
//13. .some()
//works as a boolean data type
//returns true (and stops) if the function returns true for one of the array elements.
const humans = [
  {
    firstName : "Malcom",
    lastName: "Reynolds"
  },
  {
    firstName : "Kaylee", 
    lastName: "Frye"
  },
  {
    firstName : "Jayne", 
    lastName: "Cobb"
  },
  {
    firstName : "Susan",
    lastName: "Steward"
  },
  {
    firstName : "Daniel",
    lastName: "Longbottom"
  },
  {
    firstName : "Jacob",
    lastName: "Black"
  }
];
let checkName = humans.some(nameCheck)
function nameCheck(n) {
    return n.firstName === "Malcom"
}
console.log(checkName)

console.log('/************* 14. every() *************/')
//14. every()
// method returns true if the function returns true for all elements and vice versa.
//does not change the original array
//array.every(function(currentValue, index, arr), thisValue)

const men = [
  {
    firstName : "Malcom Reynolds",

    age: 20
  },
  {
    firstName : "Kaylee Frye", 

    age: 24
  },
  {
    firstName : "Jayne Cobb", 

    age: 36
  },
  {
    firstName : "Susan Steward",

    age: 46
  },
  {
    firstName : "Daniel Longbottom",

    age: 18
  },
  {
    firstName : "Jacob Black",

    age: 38
  }
];

let answer = men.every(divisibilityTest)
function divisibilityTest(cv, i) {
      return cv.age % i === 0
}
console.log(answer)

console.log('/************* 15. find() *************/')
//15. find()
//returns the value of the first element that passes a test.
const age = [10, 15, 30, 45, 55, 60, 21, 22, 33];
let foundAge = age.find(findAge)
function findAge(cv) {
      return cv >= 10
}
console.log(foundAge)
//else it will return undefined
let noAge = age.find(findAge2)
function findAge2(cv, i) {
      return (cv * i) % 2 === 3;
}
console.log(noAge)

console.log('/************* 16. findIndex() *************/')
//16. findIndex()
//returns the index (position) of the first element that passes a test.
//array.findIndex(function(currentValue, index, arr), thisValue)
const numberArray = [10, 15, 30, 45, 55, 60, 21, 22, 33];
let numberTest1 = numberArray.findIndex(indexFind)
function indexFind(cv) {
      return cv % 4 === 0
}
console.log(numberTest1)
//returns -1 if no match is found.
let numberTest2 = numberArray.findIndex(indexFind2)
function indexFind2(cv) {
      return cv % 13 === 0
}
console.log(numberTest2)

console.log('/************* 17. includes() *************/')
//17. includes()
//deals with string only
//returns true if a string contains a specified string.
const mens = [
        "Malcom", "Reynolds","Kaylee", "Frye","Jayne", "Cobb","Susan", "Steward","Daniel","Jacob", "Longbottom", "Black"
             ];

let nameInclude = mens.includes("Jacob", -3)
console.log(nameInclude)
//Otherwise returns false
let nameFound = mens.includes("joshua")
console.log(nameFound)

console.log('/************* 18. sort() *************/')
//18. sort()
//sorts the array alphabetically and mutates the original array
const months = ['March', 'Jan', 'Feb', 'Dec', 'April'];
months.sort();
console.log(months);
//if don want to change the original array usse the "toSorted()" 

const newMonths = ['March', 'Jan', 'Feb', 'Dec', 'April'];
let newArray = newMonths.toSorted();
console.log(newArray);
console.log(newMonths);

console.log('/************* 19. reverse() *************/')
//19. reverse()
//reverses the order of the elements in an array
//overwrites the original array.
const r_months = ['March', 'Feb', 'Jan', 'Dec', 'April'];
r_months.reverse()
console.log(r_months)

//if don want to change the original array usse the "toReversed()"
const to_r_months = ['March', 'Jan', 'Feb', 'Dec', 'April;']
let toReverse = to_r_months.toReversed()
console.log(toReverse)
console.log(to_r_months)

console.log('/************* 20. join() *************/')
//20. join()
//returns an array as a string.
//array.join(separator)
const song = ["hoozambe", "shifura"]
let joined = song.join(" and ")
console.log(joined)

const joinn = ['March', 'Jan', 'Feb', 'Dec', 'April;']
let joined2 = joinn.join()
console.log(joined2)

console.log("/*********** this ***********/")
//use of this keyword→ reps the object executing the current function.
const video = {
      title: "dance",
      play(){
            console.log(this)
      }
}
video.play()

function Video(title) {
      this.title = title;
      console.log(this)
}

const x = new Video("sing")





















































