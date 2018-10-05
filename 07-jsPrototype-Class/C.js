let Gambler = function (cash, bet){
    this.cash = cash;
    this.bet = bet;
    this.winLose = function(p){
        let prob = Math.random();
        let pWin = this.bet/this.cash;
        if (prob > pWin){
            p1.cash -= p1.bet;
        } else {
            p1.cash += p1.bet;
        }
}

let g1 = new Gambler (100, 10);
let g2 = new Gambler (200, 15);
let g3 = new Gambler (150, 20);

let gArr = [g1,g2,g3];

