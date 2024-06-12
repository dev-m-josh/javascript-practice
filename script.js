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

alert("Your love score is : " + love + "%")













































































































































































alert("Welcome")
