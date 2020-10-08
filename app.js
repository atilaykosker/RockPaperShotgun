const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const shotgunButton = document.getElementById("shotgun");
const textBox = document.getElementById("message");
const scoreBoard = document.getElementById("wins");
let aiChoices = ["rock", "paper", "shotgun"];
const restartButton = document.getElementById("restart");

const kills = {
  rock: ["shotgun"],
  shotgun: ["paper"],
  paper: ["rock"],
};
let humanScore = 0;
let aiScore = 0;
function aiPlay() {
  let aiChoices = ["rock", "paper", "shotgun"];
  let aiSelection = aiChoices[Math.floor(Math.random() * aiChoices.length)];
  console.log("Ai Chose " + aiSelection);
  return aiSelection;
}

function game(humanSelection, aiSelection) {
  if (kills[humanSelection].indexOf(aiSelection) > -1) {
    humanScore = humanScore + 1;
    message.innerHTML =
      "AI Chose " +
      aiSelection.charAt(0).toUpperCase() +
      aiSelection.slice(1) +
      ", Human Win";
  } else if (kills[aiSelection].indexOf(humanSelection) > -1) {
    aiScore = aiScore + 1;
    message.innerHTML =
      "AI Chose " +
      aiSelection.charAt(0).toUpperCase() +
      aiSelection.slice(1) +
      ", AI Win";
  } else {
    message.innerHTML =
      "AI Chose " +
      aiSelection.charAt(0).toUpperCase() +
      aiSelection.slice(1) +
      ", Tied";
  }
  console.log(humanScore, aiScore);
  scoreBoard.innerHTML =
    "Human Score:" + humanScore + "  -  " + "AI Score:" + aiScore;
}
// for (i = 0; i < 5; i++) game();

rockButton.addEventListener("click", function () {
  humanSelection = "rock";
  aiSelection = aiPlay();
  game(humanSelection, aiSelection);
});
paperButton.addEventListener("click", function () {
  humanSelection = "paper";
  aiSelection = aiPlay();
  game(humanSelection, aiSelection);
});
shotgunButton.addEventListener("click", function () {
  humanSelection = "shotgun";
  aiSelection = aiPlay();
  game(humanSelection, aiSelection);
});
restartButton.addEventListener("click", function () {
  location.reload();
  return false;
});
