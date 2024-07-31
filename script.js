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


*/
/******************************************/




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


//The array functions revision
// 1. .push()
// The push() method adds new items to the end of an array.
//The push() method changes the length of the array.
//The push() method returns the new length.

const fruitsArray = ["Banana", "Orange", "Apple", "Mango"];
let newfruitsArray= fruitsArray.push("lemmon", "berries");
console.log(fruitsArray);
/*if we*/ console.log(newfruitsArray) /*we expect to get the new length of our original array*/


/****************************************/
// 2. .pop()
// The pop() method is used to remove the last element from an  array and returns that element.
//The pop() method changes the original array .
//The pop() method returns the element it removed.

const carTypes = ["fielder", "BMW", "Tesla", "Ford"];
let chosenCar= carTypes.pop();
console.log(chosenCar)


/******************************************/
// 3. .shift()
//shift() method removes the first element from an array and returns that removed element.
//This method changes the length of the array.
//The shift() method returns the shifted element.
//If the length property is 0, undefined is returned.

const fruits = ["Orange", "Banana", "Apple", "Mango"];
let chosenFruit = fruits.shift()
console.log(chosenFruit)

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












































































































