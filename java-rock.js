


let userScore =0;
let computerScore =0;
const computerScore_div=document.getElementById("playerLosses");
const playerSore_div= document.getElementById("playerWins");
const playerDraws=document.getElementById("playerDraws");
const scoreBoard=document.querySelector(".scoreboard");
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
    switch (userChoice + computerChoice) {

        case "rs":

        case "sp":

        case "pr":

    console.log("User Wins")
            break;

        case "rp":
        case "sr":
        case "ps":
            console.log("User loses")
         break;


        case "rr":
        case "pp":
        case "ss":
            console.log("Its Draw")
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

