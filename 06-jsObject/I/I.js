var poker_deck = [
    ["Spade", "A"],
    ["Heart", "A"],
    ["Club", "A"],
    ["Diamond", "A"],
    ["Spade", "2"],
    ["Heart", "2"],
    ["Club", "2"],
    ["Diamond", "2"],
    ["Spade", "3"],
    ["Heart", "3"],
    ["Club", "3"],
    ["Diamond", "3"],
    ["Spade", "4"],
    ["Heart", "4"],
    ["Club", "4"],
    ["Diamond", "4"],
    ["Spade", "5"],
    ["Heart", "5"],
    ["Club", "5"],
    ["Diamond", "5"],
    ["Spade", "6"],
    ["Heart", "6"],
    ["Club", "6"],
    ["Diamond", "6"],
    ["Spade", "7"],
    ["Heart", "7"],
    ["Club", "7"],
    ["Diamond", "7"],
    ["Spade", "8"],
    ["Heart", "8"],
    ["Club", "8"],
    ["Diamond", "8"],
    ["Spade", "9"],
    ["Heart", "9"],
    ["Club", "9"],
    ["Diamond", "9"],
    ["Spade", "10"],
    ["Heart", "10"],
    ["Club", "10"],
    ["Diamond", "10"],
    ["Spade", "J"],
    ["Heart", "J"],
    ["Club", "J"],
    ["Diamond", "J"],
    ["Spade", "Q"],
    ["Heart", "Q"],
    ["Club", "Q"],
    ["Diamond", "Q"],
    ["Spade", "K"],
    ["Heart", "K"],
    ["Club", "K"],
    ["Diamond", "K"],
]

var deckK = ["Spade", "Heart", "Club", "Diamond"]

var valueK = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

let numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

function shuffle (num){
    let numArr = [];
    for (i=0;i<num;i++){
        numArr.push(i+1)
    }
    let result = numArr.splice((Math.floor(Math.random(num-1) * ((num-1) - 1 + 1)) + 1),1)
    return result[0];
}





let initialCardSet = function () {
    let cardSet = [];
    let dummy = [];
    let initialCardNo = Math.floor(Math.random(4) * (4 - 1 + 1)) + 1;
    console.log(initialCardNo)
    for (i = 0; i < initialCardNo; i++) {
        let poker_deckIndex = Math.floor(Math.random(poker_deck.length-1) * (poker_deck.length-1) - 0 + 0) + 0;
        
        // let indexDeck = Math.floor(Math.random(3) * (3 - 0 + 0)) + 0;
        // let indexValue = Math.floor(Math.random(13) * (12 - 0 + 0)) + 0;
        // if (pokerCopy.indexof([deckK[indexDeck],valueK[indexValue]]) !== null){
        //     dummy = pokerCopy.splice(pokerCopy.indexof([deckK[indexDeck],valueK[indexValue]]));
        //     cardset += dummy;

        dummy = dummy.concat(poker_deck[poker_deckIndex]);
        console.log (dummy)
    };
}


let carddd = initialCardSet(poker_deck);

console.log(carddd);
