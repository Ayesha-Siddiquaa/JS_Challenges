function rockPaperScissors(playerChoice) {
    
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    
    playerChoice = playerChoice.toLowerCase();
    
    
    if (!choices.includes(playerChoice)) {
        return "Invalid choice. Please choose rock, paper, or scissors.";
    }
    
    
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win! Computer chose " + computerChoice + ".";
    } else {
        return "You lose! Computer chose " + computerChoice + ".";
    }
}