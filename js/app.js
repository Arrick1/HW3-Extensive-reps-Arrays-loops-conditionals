// Easy going 
for(let i = 1; i <= 20; i++){
    console.log(i)
}

// Get Even
for(let i = 0; i <= 200; i+=2){
    if (i % 2 == 0); 
    console.log(i)
}

// Excited Kitten
// function getRandomInt(even) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }

var statements = ["...human...why you taking pictures of me?...", 
"...the catnip made me do it...", "...why does the red dot always get away..."]
for(let i = 0; i < 100; i++){
if(i % 2 === 0) {
    let index = Math.floor(Math.random()* statements.length)
    console.log(statements[index]);
}
}
