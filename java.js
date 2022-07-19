
// Random computer play
function computerPlay() {

    let answer = Math.floor(Math.random() * (3 - 1 + 1) + 1)

    if (answer == 1 ) {
        return "rock";
    } else if (answer == 2){
        return "paper";
    } else {
        return "scissors"
    }

  }

  
let playerSelection;
let computerSelection;
let oneRound;
let userScore = 0;
let computerScore = 0;


// Playing single round
function playRound (playerSelection, computerSelection) {

  playerSelection = prompt("Please enter your choise. Rock, Paper or Scissors").toLowerCase();
  computerSelection = computerPlay();

  if (playerSelection == 'rock' && computerSelection == 'paper'){
      return oneRound = "You Lose! Paper beats Rock";
  } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
      return oneRound = "You Win! Rock beats Scissors";

  } else if (playerSelection == 'paper' && computerSelection == 'rock'){
    return oneRound = "You Win! Paper beats Rock";
  } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
    return oneRound = "You Lose! Scissors beats Paper";

  } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
    return oneRound = "You Win! Scissors beats Paper";
  } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
    return oneRound = "You Lose! Rock beats Scissors";
  } else if (playerSelection == computerSelection){
    return oneRound = "It's a Tie";
  } else {
    return oneRound = "WRONG ENTRY";
 }
}

//Keeps and returns the score
function score(){
  if( oneRound == "You Win! Rock beats Scissors" || oneRound == "You Win! Paper beats Rock" || oneRound == "You Win! Scissors beats Paper"){
   userScore++;
  }else if(oneRound == "You Lose! Paper beats Rock" || oneRound == "You Lose! Scissors beats Paper" || oneRound == "You Lose! Rock beats Scissors"){
    computerScore++;
  }else if (oneRound == "It's a Tie"){
    userScore++;
    computerScore++;
  }else{userScore;
        computerScore;
      }

   if(userScore > computerScore){
     return "You Win. Score is User : " + userScore + " to Computer : " + computerScore;
   }else if (userScore < computerScore){
     return "You Lose. Score is User : " + userScore + " to Computer : " + computerScore;
   }else { return "It's a Tie Score is User : " + userScore + " to computer : " + computerScore }

  }
  





//Playing 5 rounds and keeping score
function game(){
  for (let round = 0; round < 5; round++){
  console.log(playRound(playerSelection,computerSelection));
  console.log(score())
}
}

game();









