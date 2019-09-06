


let userScore =0;
let computerScore =0;
let draws=0;
const computerScore_span=document.getElementById("losses");
const playerSore_span= document.getElementById("wins");
let playerDraws_span=document.getElementById("draws");
const scoreBoard=document.getElementById("playerWins");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");


function getComputerChoice() {
    const choices=["r","p","s"];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
  // console.log(computerChoice);
   //console.log(userChoice);
function win(userChoice,computerChoice) {
    userScore++
   console.log("Win")

    playerSore_span.innerHTML=userScore;

//scoreBoard.innerHTML = "You Win!"
}

function lose(userChoice,computerChoice) {
    computerScore++
    computerScore_span.innerHTML=computerScore;
    console.log("LOST")

}
function draw(userChoice,computerChoice) {

   draws++
    playerDraws_span.innerHTML=draws;
    console.log("DRAW")

}
    switch (userChoice + computerChoice) {

        case "rs":

        case "sp":

        case "pr":
            win();
            // console.log("User Wins")
            break;

        case "rp":
        case "sr":
        case "ps":
         lose();
          //console.log("User loses")
         break;


        case "rr":
        case "pp":
        case "ss":
           draw();
            // console.log("Its Draw")
            break;

    }
}


function main () {
    rock.addEventListener('click', function () {
        game("r");
        //console.log("hey you clicked on rock");
    });
    paper.addEventListener('click', function () {
        game("p");
        //console.log("hey you clicked on paper");
    });
    scissors.addEventListener('click', function () {
        game("s")
        // console.log("hey you clicked on scissors");
    });

}
main();

