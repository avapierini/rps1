const userScore=0;
const computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector("score-board");
const result_p =document.querySelector(".result > p ");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function getComuterChoice() {
  const choices = ['r','p','s']
  const randomNumber = Math.floor(Math.random() *3);
  return choices[randomNumber];
}

function convertToword(letter)

function win(user,computer){
  if(letter==="r") return "rock"
    if(letter==="p") return "paper"
     return "scissors"
}
function win(userChoice, computerChoice) {
userScore++;
  userScore_span.innerHTML= userScore;
  computerScore_span.innerHTML=computerScore;
  const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML=${convertToword(userChoice)} (user) beats ${convertToword(computerChoice)}(comp).You Win!';

  
) }
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML= userScore;
  computerScore_span.innerHTML=computerScore;
  const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML=${convertToword(userChoice)} (smallUserWordser) loses to ${convertToword(computerChoice)}(comp).You lost!';

) }

function draw(userChoice, computerChoice){
  const smallUserword = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML=${convertToword(userChoice)} (smallUserWordser) equals ${convertToword(computerChoice)}(smallCompWord).Its a draw!';

}



function game(userChoice){
  const computerChoice =getComuterChoice();
  switch(userChoice+computerChoice){
      case"rs":
      case"pr":
      case"sp":
    win(userChoice,computerChoice);
      break;
      case"rp":
      case"ps":
      case"sr":
      lose(us);
      break;
    case "rr":
      case"pp":
      case"ss":
      draw();
      break;
      
  }
  
}

function main() {

rock_div.addEventListener('click',function(){
  game("r");
})
  
  paper_div.addEventListener('click',function(){
game("p");
  })
    scissors_div.addEventListener('click',function(){
game("s");
  
})
}


main();
