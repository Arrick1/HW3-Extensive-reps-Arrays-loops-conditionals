// Easy going 
//Write a for loop that will log the numbers 1 through 20.
for(let i = 1; i <= 20; i++){
    console.log(i)
}

// Get Even
//Write a for loop that will log only the even numbers in 0 through 200.
for(let i = 0; i <= 200; i+=2){
    if (i % 2 == 0); 
    console.log(i)
}

// Excited Kitten  
//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for(let i = 0; i < 20; i++){
    console.log('Love me, pet me! HSSSSSS!');
}

//For every even number in your loop, log "...human...why you taking pictures of me?...", 
//"...the catnip made me do it...", or "...why does the red dot always get away..." at random.
var statements = ["...human...why you taking pictures of me?...", 
"...the catnip made me do it...", "...why does the red dot always get away..."]
for(let i = 0; i < 100; i++){
if(i % 2 === 0) {
    let index = Math.floor(Math.random()* statements.length)
    console.log(statements[index]);
}
}

// fizz buzz 

//Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for(let x = 1; x <= 100; x++){
    console.log(x); if((x % 5 === 0) && (x % 3 === 0)){
        console.log("fizz");}
  else if (x % 5 === 0){
  console.log("buzz");}
  else if (x % 3 === 0){
  console.log("fizzbuzz");}

    }

// Getting to Know You

    const kenny = ["Kenny", 1000, "Austin"];
    const jimHaff = ["Jim H", 16, "All cities"];
    const reuben = ["Reuben", 22, "Durham"];
    const jimClark = ["Jim C", 186, "LA"];
    const ryan = ["Ryan", 65, "Denver"];

    // Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" 
    // from the kenny array and replace it with "Gameboy".
    kenny[0] = 'gameboy'; 

    // Jim Clark just had his birthday; change jimClark's 
    // array to reflect him being a year older. Don't just hard code 187--pretend 
    // that you didn't already know that his age is 186, and write your code to just 
    // make him a year older than whatever age he was.
    jimClark[1]+=1;
    
    // Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from 
    // "Denver" to "Gotham City".
    ryan[2] = "Gotham City";

    // Reuben left Durham 5 years ago to come to Chicago. First, remove 
    // "Durham" from Reuben's array, and then add "Chicago". 
    // (Note: remove and then add is different from simply changing the value at that index.)

    reuben.pop([2]); reuben.push("Chicago"); 
    
    // Jim Haff could be literally anywhere in the world. 
    // Remove "All cities" from his array, then pick any 3 cities 
    // you like, and add them to Jim's array. If you did it in 3 lines 
    // of code that's fine, but see if you can do it in one line of code

    jimHaff[2] = 'New York'; 
    jimHaff.push("Boston");
    jimHaff.push("Los Angeles");

    
    // Bonus: Whoops! Jim Haff is actually only allowed to be in one of 
    // two cities. Whatever the first of the 3 cities for Jim Haff is now, 
    // remove it from the array using .splice()
    
    jimHaff.splice(3, 2,);


//Yell at the Ninja Turtles

//Create an array with the members of the ninja turtles 
//(Donatello, Leonardo, Raphael, Michaelangelo)

const heros = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

//Use a for loop to call .toUpperCase() on each of them 
//and print out the result.

for(let i = 0; i < heros.length; i++){
    console.log(heros[i].toUpperCase());{
    } 
}

// Bonus: Modify the answer you just wrote. Instead of all letters 
// being uppercase, make the letters alternate back and forth between 
// uppercase and lowercase.








    // const alternate = () => {
//     let names ["turtle name"]
// }

//  for (let i = 0; i <names.length; i++) {
//      let string = ""
//      for (let j = 0; j< names[i].length; j++){
//          if(j % 2 === 0) {
//              string += toUppercase(names[i][j])
//          }

//      } console.log(string)
//  }



 //////
//  HOMEWORK NOTES 

// const digitSum () => {
//   const numToString = num.tostring().split(" ") = ["4", "3", "4", "5"] 
//   let count = 0
//   for(let i = 0; i <numtoArray.length)
// }