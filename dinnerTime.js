//Works on website! www.tessmyers.com/dinnertime.html
var makeDinner = function() {
  var user = prompt("We are going to go on the most exciting culinary adventure. What do you want to make for dinner? You can make STEAK, SALAD, or SOUP").toUpperCase();

  switch(user) {
  case 'STEAK':
  var season = prompt("Good choice! how do you decide to season your steak? SALT or PEPPER?").toUpperCase();
  if (season === 'SALT') {
    console.log("Oh no! It turns out you were a slug all along! You have assalted yourself and the evening has ended in disaster. That's what you get for trying to cook.");
  } else if (season === 'PEPPER') {
    console.log("You use too much pepper! A sneezing fit overtakes you and you have to cancel dinner for the rest of your life. How sad. Well, this was a very high-steaks venture.");
  } else {
  }
  break;

  case 'SALAD':
  var dressing = prompt("Mmm BUNNY FOOD. How do you want to dress this salad? ITALIAN, RANCH, or MEAT SAUCE?").toUpperCase();
  if (dressing === 'ITALIAN' || dressing === 'RANCH') {
    console.log("You made the mistake of choosing ordinary salad dressing. Your punishment is to hear that joke about how the tomato blushed because it saw the salad dressing, but on loop forever. Enjoy. ");
  } else if (dressing === 'MEAT SAUCE') {
    console.log("How saucy of you! You have chosen the only possible path to success in this game. Congratulations, have some cute animals( http://gruntle.me/ )");
  } else {
  }
  break;

  case 'SOUP':
  var type = prompt("Oooh, liquidy. What kind of soup do you want to make? ALPHABET or TOMATO?").toUpperCase();
  if (type === 'TOMATO') {
    var letters = prompt("You know, tomato soup is pretty boring. Would you like to add some alphabits to that? YES or NO.").toUpperCase();
    if (type === 'TOMATO' && letters === 'YES') {
      console.log("You have bought a letter! It turns out that you're on Jeopardy and tripping balls so hard you thought you were making soup. Enjoy the rest of your evening.");
    } else if (letters === 'NO') {
      console.log("Christ you're boring. Eat your fucking tomato soup.");
    } else {
    }
  } else if (type === 'ALPHABET') {
    console.log("Sadly, it turns out that the can your soup came in leached bisphenol A all over your alphabits and now you have cancer of the alphabet. No joke guys, watch out for that shit.");
  } else {
  }
  break;
  default:
  var tryAgain = confirm("sorry, we don't serve " + user + " here. GO ELSEWHERE or TRY AGAIN.");
  if (tryAgain === true) {
    makeDinner();
  } else {
  }
  }
};
  makeDinner();
