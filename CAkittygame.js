<script>
var userChoice = prompt("A wild kitty appears! Do you bite her?");
var computerChoice = Math.random();
if (computerChoice < 0.5) {
    computerChoice = "yes";
} else if(computerChoice > 0.5) {
    computerChoice = "no";
} 

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        alert("Stalemate!");
    }
    // tie
    else if (choice1 === "yes") {
        if (choice2 === "no") {
            alert("You win! But you also have cat hair in your mouth");
        }
        else {
            alert("Ahh! You've both bitten each other! Nobody wins :( ");
        }}
    // User bites

    else if (choice1 === "no") {
        if (choice2 === "yes") {
            alert("The cat has gotten you! You are mortally wounded! Alas, your bedspread will never be the same again.");
        }
        else {
            alert("peace is achieved. The kingdom is safe.");
        }}
    //User does not bite
}
        
compare(userChoice, computerChoice)
</script>

//hosted on www.tessmyers.com/kitty
