
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var lose = 0;
var round = 0;

var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computer-text");
var winText = document.getElementById("winText");
var loseText = document.getElementById("loseText");
var roundText = document.getElementById("roundText");


    document.onkeyup = function(event){
        var userChoice = event.key; 
        var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        if (round < 9){ 
            if(userChoice === computerChoice){
                win ++;
                round++;
            }
            else{
                lose ++;
                round++;
            }   
        }
        else{
            if (win > lose ){
                alert("Game Over! You  won " + win + " times...");
                round = 0;
                win = 0;
                lose = 0;
            }
            else{
                alert("Game Over! You  lost " + lose + " times...");
                round = 0;
                win = 0;
                lose = 0;
            }
        }
 
        userChoiceText.textContent = "You chose: " + userChoice;
        computerChoiceText.textContent = "Computer chose: " + computerChoice;
        winText.textContent = "Wins: " + win;
        loseText.textContent = "lose: " + lose;
        roundText.textContent = "round: " + round;

    };