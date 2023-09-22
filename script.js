function playRound(playerSelection, computerSelection) {
   
   //console.log(playerSelection,computerSelection)
    if (playerSelection.trim() === "/rock/i", computerSelection === "Scissors") {
        return "You win! Rock beats Scissors!"
    }
    else if (playerSelection.trim() === "/rock/i", computerSelection === "Paper") {
        return "You lose! Paper beats rock!"
    }
    else if (playerSelection.trim() === "/scissors/i", computerSelection === "Paper") {
        return "You win! Scissors beat paper!"
    }
    else if (playerSelection.trim() === "/scissors/i", computerSelection === "Rock") {
        return "You lose! Rock beats scissors!"
    }
    else if (playerSelection.trim() === "/paper/i", computerSelection === "Rock") {
        return "You win! Paper beats rock!"
    }
    else if (playerSelection.trim() === "/paper/i", computerSelection === "Scissors") {
        return "You lose! Scissors beat paper!"
    }
    else {
        return "Tie!"
    }
  }


function getComputerChoice() {
    let choice = Math.floor(Math.random()* 3);
    switch (choice) {
        case 0: return "Paper"
        case 1: return "Rock"
        case 2: return "Scissors"
    }
  }

  function game() {
    let computer = 0;
    let player = 0;
    for (i = 1; i<=5; i++) {
        const computerSelection = getComputerChoice();
        let playerSelection = prompt("What's your choice?", "");
        if (playerSelection === null) {
            console.log("You left the game!")
            break
        }
        const res = playRound(playerSelection, computerSelection);
        console.log(res)
        if (res === "You win! Rock beats Scissors!" || res === "You win! Scissors beat paper!" || res === "You win! Paper beats rock!") {
            player++;
            console.log(`Round ${i}. Score: You: ${player}, Computer: ${computer}`);
        }
        else if (res === "Tie") {
        console.log(`Round ${i}. Score: You: ${player}, Computer: ${computer}`);
        }
        else {
            computer++;
            console.log(`Round ${i}. Score: You: ${player}, Computer: ${computer}`);
        }
    }
    if (player > computer) {
        console.log("You won!")
    }
    else {
        console.log("Computer won!")
    }
  }
  game()
  /* 
  1. Write a game rules
  2. Get Computer Choice
  3. Make 5 rounds */