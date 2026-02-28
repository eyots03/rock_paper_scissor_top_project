let humanScore = 0;
        let computerScore = 0;
        let message; // declared to show who woon for the user
        let whoWon; // lets the computer know who won the round

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

        function getHumanChoice() {
            let choice = prompt(`You: ${humanScore}\nComputer: ${computerScore}\nChoose between rock, papper and scissor (all lower case, no spelling mistake!)`);
            return choice;
        } // asks user for an answer

        function playRound(humanChoiceAns, computerChoiceAns) {
            let humanChoice = humanChoiceAns; // declared again to not run the original function again
            let computerChoice = computerChoiceAns;
            if (humanChoice === "rock" && computerChoice === "scissor" ||
                humanChoice === "paper" && computerChoice === "rock" ||
                humanChoice === "scissor" && computerChoice === "paper"
             ) {
                message = `Computer chose ${computerChoice}\nYou win this round!`;
                alert(message);
                whoWon = "player";
             } else if (
                computerChoice === "rock" && humanChoice === "scissor" ||
                computerChoice === "paper" && humanChoice === "rock" ||
                computerChoice === "scissor" && humanChoice === "paper"
             ) {
                message = `Computer chose ${computerChoice}\nComputer wins this round!`;
                alert(message);
                whoWon = "computer";
             } else if (computerChoice == humanChoice) {
                message = `Computer chose ${computerChoice}\nThis round is a tie`;
                alert(message);
                whoWon = "tie";
             } // logic to show who won the round
            

            if (whoWon === "computer") {
                computerScore++;
            } else if (whoWon === "player") {
                humanScore++;
            }
        }

        function playGame () {
            for (let i=0; i<5; i++) {
                playRound(getHumanChoice(), getComputerChoice()); // plays the round five times
            }
                if (computerScore > humanScore) {
                    alert(`Final score\nYou: ${humanScore}\nComputer: ${computerScore}\nThe computer wins the game`);
                } else if (humanScore > computerScore) {
                    alert(`Final score\nYou: ${humanScore}\nComputer: ${computerScore}\nYou win the game`);
                } else {
                    alert(`Final score\nYou: ${humanScore}\nComputer: ${computerScore}\nThe game was a tie`);
                }
            } // logic for the final scores
       playGame();
        