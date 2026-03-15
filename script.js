let humanScore = 0;
let computerScore = 0;
let message; // declared to show who won for the user
let whoWon; // lets the computer know who won the round

const rock = document.createElement("button"); // buttons to choose
const paper = document.createElement("button");
const scissor = document.createElement("button");
const div = document.querySelector("div");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissor.textContent = "Scissor";

div.append(rock, paper, scissor);

        function getComputerChoice() {
           let choice = Math.floor(Math.random() * 10);
           if(choice < 3){
            return "rock";
           } else if(choice > 6){
            return "paper";
           } else {
            return "scissor";
           }
        } // generates random computer choice

        function playRound(humanChoiceAns, computerChoiceAns) {
            let humanChoice = humanChoiceAns; 
            let computerChoice = computerChoiceAns; // declared again to not run the original function again
            if (humanChoice === "rock" && computerChoice === "scissor" ||
                humanChoice === "paper" && computerChoice === "rock" ||
                humanChoice === "scissor" && computerChoice === "paper"
             ) {
                message = `Computer chose ${computerChoice}\nYou win this round!\nScore:\nYou: ${humanScore+1}\nComputer: ${computerScore}`;
                alert(message);
                whoWon = "player";
             } else if (
                computerChoice === "rock" && humanChoice === "scissor" ||
                computerChoice === "paper" && humanChoice === "rock" ||
                computerChoice === "scissor" && humanChoice === "paper"
             ) {
                message = `Computer chose ${computerChoice}\nComputer wins this round!\nScore:\nYou: ${humanScore}\nComputer: ${computerScore+1}`;
                alert(message);
                whoWon = "computer";
             } else if (computerChoice == humanChoice) {
                message = `Computer chose ${computerChoice}\nThis round is a tie\nScore:\nYou: ${humanScore}\nComputer: ${computerScore}`;
                alert(message);
                whoWon = "tie";
             } // logic to show who won the round
            

            if (whoWon === "computer") {
                computerScore++;
            } else if (whoWon === "player") {
                humanScore++;
            } // increments the score

            if(computerScore === 5 || humanScore === 5) {    
                if (computerScore > humanScore) {
                        alert(`Final score\nYou: ${humanScore}\nComputer: ${computerScore}\nThe computer wins the game`);
                    } else if (humanScore > computerScore) {
                        alert(`Final score\nYou: ${humanScore}\nComputer: ${computerScore}\nYou win the game`);
                    } else {
                        alert(`Final score\nYou: ${humanScore}\nComputer: ${computerScore}\nThe game was a tie`);
                    } // logic for the final scores    
                computerScore = 0;
                humanScore = 0; // resets the score after 5    
            }   
        }
// listens for event and calls the functions
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissor.addEventListener("click", () => playRound("scissor", getComputerChoice()));