
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





































