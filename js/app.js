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
