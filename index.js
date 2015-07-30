//Only question:
//How did we get past the random result of getComputerChoice()?!??!


//This function sets up the array for the options
//It also sets it up to be able to make the
//buttons randomness
//This is just the Computer's answer set up.
function getComputerChoice(){
  var choices = ["rock", "paper", "scissors", "lizard", "spock"];
  //random number between 1-5
  //.floor rounds down
  return choices[Math.floor(Math.random() * choices.length)];
}
//This function defines and sets the Choices Variables:
function setChoices(userChoice, computerChoice){
  $("#userAnswer").text(userChoice);
  $("#computerAnswer").text(computerChoice);
}
//This function sets up the scoring set up:
var compScore = 0;
var useScore = 0;
function updateScore(useScore, compScore){
  $("#computerScore").text(compScore);
  $("#userScore").text(useScore);
}
//This is the looping function so that the buttons
//Can be repeatedly pushed to get a new result each time.
for(var i = 0; i < buttons.length; i++){
  buttons[i].onclick = function(){

    var userChoice = this.value;
    var computerChoice = getComputerChoice();

    //userChoice is Rock here:
    if(userChoice === "rock"){
      if (computerChoice === "rock"){
        $("#thisRound").text("We have tied");
      }
      if(computerChoice === "paper"){
        $("#thisRound").text("My Paper has covered your Rock. :)");
        compScore++;
      }
      if(computerChoice === "scissors"){
        $("#thisRound").text("Your Rock has crushed my Scissors. :(");
        useScore++;
      }
      if(computerChoice === "lizard"){
        $("#thisRound").text("Your Rock has crushed my Lizard. D:");
        useScore++;
      }
      if(computerChoice === "spock"){
        $("#thisRound").text("My Spock has vaporized your Rock. :D");
        compScore++;
      }
    }
    //userChoice is Paper here:
    else if(userChoice === "paper"){
      if(computerChoice ==="rock"){
        $("#thisRound").text("Your Paper has covered my Rock. :(");
        useScore++;
      }
      if (computerChoice === "paper"){
        $("#thisRound").text("We have tied.");
      }
      if(computerChoice === "scissors"){
        $("#thisRound").text("My Scissors cut your Paper. :D");
        compScore++;
      }
      if(computerChoice === "lizard"){
        $("#thisRound").text("My Lizard eats your Paper. :D");
        compScore++;
      }
      if(computerChoice === "spock"){
        $("#thisRound").text("Your Paper has disproven my Spock. :(");
        useScore++;
      }
    }
    //userChoice is Scissors here:
    else if(userChoice === "scissors"){
      if(computerChoice === "rock"){
          $("#thisRound").text("My Rock crushes your Scissors. :D");
          compScore++;
      }
      if(computerChoice === "paper"){
        $("#thisRound").text("Your Scissors cut my Paper. :(");
        useScore++;
      }
      if(computerChoice === "scissors"){
        $("#thisRound").text("We have tied.");
      }
      if(computerChoice === "lizard"){
        $("#thisRound").text("Your Scissors decapitate my Lizard. :(");
        useScore++;
      }
      if(computerChoice === "spock"){
        $("#thisRound").text("My Spock crushes your Scissors. :)");
        compScore++;
      }
    }
    //userChoice is lizard now:
    else if(userChoice === "lizard"){
      if(computerChoice === "rock"){
        $("#thisRound").text("My Rock crushes your Lizard. :D");
        compScore++;
      }
      if(computerChoice === "paper"){
        $("#thisRound").text("Your Lizard eats my Paper. :(");
        useScore++;
      }
      if(computerChoice === "scissors"){
        $("#thisRound").text("My Scissors decapitate you Lizard :P.");
        compScore++;
      }
      if(computerChoice === "lizard"){
        $("#thisRound").text("We have tied.");
      }
      if(computerChoice === "spock"){
        $("#thisRound").text("Your Lizard has poisoned my Spock. :(");
        useScore++;
      }
    }

      //userChoice is now Spock:
      else if(userChoice === "spock"){
      if(computerChoice === "rock"){
        $("#thisRound").text("Your Spock vaporizes my Rock. :(");
        useScore++;
      }
      if(computerChoice === "paper"){
        $("#thisRound").text("My Paper disproves your Spock. :P");
          compScore++;
      }
      if(computerChoice === "scissors"){
        $("#thisRound").text("Your Spock crushes my Scissors. :P");
        useScore++;
      }
      if(computerChoice === "lizard"){
        $("#thisRound").text("My Lizard poisons your Spock. :P");
        compScore++;
        console.log("spock?");
      }
      if(computerChoice === "spock"){
        $("#thisRound").text("We have tied.");
      }
    }

  //Below is required to fill the fields,
  //Rather than the lengthy
  //Multiple calls I had
setChoices(userChoice, computerChoice);
updateScore(useScore, compScore);
  }
}
