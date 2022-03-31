
let answer = document.getElementById("answer");
let button = document.getElementById("button");
let input = document.getElementById("input");

button.addEventListener("click", function(){
  if (input.value.length < 1) {
    alert("Please enter a question!");
  } else {
    const responseNumber= Math.floor(Math.random()*20)
    const imageSrc = `./img/magic/magic8ball_${responseNumber}.png`;
    const responseImage= document.createElement('img');
    responseImage.src=imageSrc;
    responseImage.width="100";
    responseImage.height="100";
    answer.innerHTML="";
    answer.appendChild(responseImage);
  
  }
});



















// const responseNumber= Math.floor(Math.random()*20)
// const imageSrc = `./img/magic8ball_${responseNumber}.png`;
// const responseImage= document.createElement('img');
// responseImage.src=imageSrc;
// responseImage.width="100";
// responseImage.height="100";
// result.appendChild(responseImage);
// ​

















// var options = [
//   "It is certain",
//   "It is decidedly so",
//   "Without a doubt",
//   "Yes – definitely",
//   "You may rely on it",
//   "As I see it, yes",
//   "Most likely",
//   "Outlook good",
//   "Yes",
//   "Signs point to yes",
//   "Don’t count on it",
//   "My reply is no",
//   "My sources say no",
//   "Outlook not so good",
//   "Very doubtful",
//   "Reply hazy, try again",
//   "Ask again later",
//   "Better not tell you now",
//   "Cannot predict now",
//   "Concentrate and ask again"
// ];

// button.addEventListener("click", function(){
//   if (input.value.length < 1) {
//     alert("Please enter a question!");
//   } else {
//     eight.innerText = "";
//     // var num = input.value.length % options.length;
//     // answer.innerText = options[num];
//     const responseNumber= Math.floor(Math.random()*20)
//     const imageSrc = `options${responseNumber}`;
//     const responseImage= document.createElement('img');
    
//   }
// });
