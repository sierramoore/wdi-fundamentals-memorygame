var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2] ;

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === [2] && cardsInPlay.length === [0]){
    alert("You found a match!");
}
else
    alert("Sorry, try again.");

/*
var cardThree = ;
var cardFour = ;
console.log("User flipped " + cardThree);
*/

