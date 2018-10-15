// let Gambler = function (cash, bet){
//     this.cash = cash;
//     this.bet = bet;
//     this.winLose = function(p){
//         let prob = Math.random();
//         let pWin = this.bet/this.cash;
//         if (prob > pWin){
//             p1.cash -= p1.bet;
//         } else {
//             p1.cash += p1.bet;
//         }
// }

// let g1 = new Gambler (100, 10);
// let g2 = new Gambler (200, 15);
// let g3 = new Gambler (150, 20);

// let gArr = [g1,g2,g3]

class Gambler {
    constructor (options){
        this.cash = options.cash;
        this.bet = options.bet;
    }
    winLose(){
        let prob = Math.random();
        let pWin = this.bet/this.cash;
        if (prob > pWin){
            this.cash -= this.bet;
        } else if (prob < pWin){
            this.cash += this.bet
        }
    }
}

let g1 = new Gambler ({cash: 100, bet: 10})
let g2 = new Gambler ({cash: 200, bet: 15})
let g3 = new Gambler ({cash: 150, bet: 20})

let gArr = [g1,g2,g3]

function casino (arr) {
    let check = 1;
    for (i=0;check>0;i++){
        for (i=0;i<arr.length;i++){
            console.log(arr[i].winLose())
            if (arr[i].cash <= 0) {
                check -= 1;
                console.log(`someone lose`)
            }
        }
    }
}

console.log (casino(gArr));

