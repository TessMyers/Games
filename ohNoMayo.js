
// This will tell you if your condiment is mayo or contains the word "mayo". Exceptions made for aioli, because yum.
// Hosted at www.tessmyers.com/ohnomayo.html

var condiment = prompt("Is it mayo? Enter questionable condiment to find out:");
if (condiment === "mayo") {
	alert("Oh fuck, it's mayo! RUN FOR IT.");
} else if(condiment === "aioli") {
	alert("Aioli is nectar of the gods and has absolutely nothing whatsoever in common with mayo. You may trust it completely.");
} else {
	var text = condiment;
	var target = "mayo";
	var hits = [];
	for(var i = 0; i < text.length; i++) {
    if (text[i] === "m"){
      var preHits = [];
      for (var j = i; j < (target.length + i); j++) {
        preHits.push(text[j]);
      }
      if (preHits.join("") === target) {
        hits.push(preHits.join(""));
      }
    }
	}
	if (hits.length === 0) {
      alert("You're safe! It's ok! IT'S NOT MAYO.");
	} else {
      alert("Oh fuck, there's mayo somewhere in there! GET TO THE CHOPPAH.");
	}
}
















