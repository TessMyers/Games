// The prisoners dilemma, but with cats! Hosted at http://www.tessmyers.com/kitty.html (includes irritating and insistent prompts).

var kittyGame =  function() {
  var userChoice = prompt("A wild kitty appears! Do you bite her?");
  var computerChoice = (Math.random() >= 0.5) ? "yes" : "no";
  if (userChoice != "yes" && userChoice != "no") {
   alert("Conform to my binary demands! Yes or no.");
   kittyGame();
  }
  if (userChoice === "yes") {
    if (computerChoice === "yes") {
      alert("Ahh! You've both bitten each other! Nobody wins :( ");
    } else {
      alert("You win! But you also have cat hair in your mouth");
    }
  } else if (userChoice === "no") {
    if (computerChoice === "yes") {
      alert("The cat has gotten you! You are mortally wounded! Now she gets to pee outside the litterbox whenever she wants.");
    } else {
      alert("You have both opted for peacful action. Nirvana is achieved. The kingdom is safe.");
    }
  }
};
kittyGame();
