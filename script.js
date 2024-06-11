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


