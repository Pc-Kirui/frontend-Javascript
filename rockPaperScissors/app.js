const game = () => {
    let pScore =0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro'); 
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Play Match
    const playMatch = () => {
        const selections = document.querySelectorAll(".selections button");
        const playerHand = document.querySelector('.player_hand');
        const computerHand = document.querySelector('.computer_hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });

        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
       

        selections.forEach(selection => {
            selection.addEventListener('click', function() {
                //Computer Choice
                const computerChoice = Math.floor(Math.random() * 3);
                const computerNumber = computerOptions[computerChoice];

                setTimeout(() => {
                    // we call compare hands
                
                    compareHands(this.textContent, computerNumber);

                    //update images
                    playerHand.src = `images/${this.textContent}.png`;
                    computerHand.src = `images/${computerNumber}.png`;
                },2000);

                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player_score p');
        const computerScore = document.querySelector('.computer_score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        //update Text 
        const winner = document.querySelector('.winner');
        //checking for a tie
        if(playerChoice === computerChoice){
           winner.textContent = 'It is a tie';
            return;
        }
        //check for rock
        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore ++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer Wins';
                cScore ++;
                updateScore();
                return;
            }
        }
        //check for paper
        if(playerChoice === 'paper') {
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore ++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Player Wins';
                pScore ++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if(playerChoice === 'scissors') {
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore ++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Player Wins';
                pScore ++;
                updateScore();
                return;
            }
        }
    }

    //Call the inner function
    startGame();
    playMatch();
};
//Start the game function
game();