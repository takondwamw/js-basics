// Game class to handle game logic and state
class Game {

    constructor() {
        const storedScore = localStorage.getItem('score');
        console.log(JSON.parse(localStorage.getItem('score')));
        if (storedScore) {
            this.score = JSON.parse(storedScore);
            this.updateScore(); 
            console.log(this.score);
        } else {
            this.score = {
                wins: 0,
                ties: 0,
                losses: 0
            };

            localStorage.setItem('score', JSON.stringify(this.score));
            this.updateScore(); 
            console.log('space');
            console.log(this.score.losses);


        }

            this.choices = ["rock", "paper", "scissors"];
            this.alert = document.createElement("div");
            this.alert.classList.add("alert");
            document.body.appendChild(this.alert);
            this.alertTimeoutId = null;
     
    };
    


    // Reset score
    resetScore() {
      this.score = {
        wins: 0,
        ties: 0,
        losses: 0
      };
      this.updateScore();
    }
  
    // Update score display
    updateScore() {
      document.getElementById("wins").textContent = this.score.wins;
      document.getElementById("ties").textContent = this.score.ties;
      document.getElementById("losses").textContent = this.score.losses;
    }
  
    // Display alert message
    showAlert(message, type) {
      this.alert.textContent = message;
      this.alert.style.backgroundColor = type === "win" ? "#28a745" : type === "tie" ? "#ffc107" : "#dc3545";
      this.alert.style.visibility = "visible";
      if (this.alertTimeoutId) {
        clearTimeout(this.alertTimeoutId);
      }
      this.alertTimeoutId = setTimeout(() => {
        this.alert.style.visibility = "hidden";
      }, 2000);
    }
  
    // Get computer choice
    getComputerChoice() {
      return this.choices[Math.floor(Math.random() * this.choices.length)];
    }
  
    // Determine winner and update score
    determineWinner(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        this.score.ties++;
        this.updateScore();
        this.showAlert("It's a tie!", "tie");
      } else if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        this.score.wins++;
        this.updateScore();
        this.showAlert("You win!", "win");
      } else {
        this.score.losses++;
        this.updateScore();
        this.showAlert("You lose!", "lose");
      }
    }
  }
  
  // Initialize game
  const game = new Game();
  
  // Attach event listeners to buttons
  document.getElementById("rock").addEventListener("click", () => {
    game.determineWinner("rock", game.getComputerChoice());
  });
  
  document.getElementById("paper").addEventListener("click", () => {
    game.determineWinner("paper", game.getComputerChoice());
  });
  
  document.getElementById("scissors").addEventListener("click", () => {
    game.determineWinner("scissors", game.getComputerChoice());
  });
  
  document.getElementById("reset").addEventListener("click", () => {
    game.resetScore();
    game.showAlert("Scores reset!", "tie");
  });
  