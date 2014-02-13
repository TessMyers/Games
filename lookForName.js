//based off of codeacademy exercise, Paul helped me improve this. 

var text = "why hello there tess, I hear that I need to plant a name in this box a few times, tess. what do you think of that. I wonder if punctuation will effect this at all, hmm, tess?"
var myName = "tess"
var hits = []
for(var i = 0; i < text.length; i++) {
  if (text[i] === "t") {
    var preHits = []
    for (var j = i; j < (myName.length + i); j++) {
      preHits.push(text[j])
    }
    if (preHits.join("") === myName) {
      hits.push(preHits.join(""))
    }
  }
}
if (hits.length === 0) {
    console.log("Your name wasn't found!")
} else {
    console.log(hits)
}


//["tess", "tess", "tess"]
// fuckyeah
