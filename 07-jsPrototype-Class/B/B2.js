let Player = function (name, health) {
    this.name = name;
    this.health = health;
    this.attack = function (opponent) {
        opponent.health -= 10;
    }
}

Player.prototype.boost = function (player){
    player.health += 5;
}

let p1 = new Player("Ariana", 100);
let p2 = new Player("Pete", 100);

function whoAttack(player1, player2) {
    let x = Math.random();
    let p1log = 0;
    let p2log = 0;
    if (x < 0.5) {
        p1log++;
        p2log = 0;
        while (p1log = 3){
            console.log (`${player1.name} got a boost!`)
            p1log = 0;
            return player1.boost(player1)
        }
        return player1.attack(player2);
    } else {
        p2log++;
        p1log = 0;
        while (p2log = 3){
            console.log (`${player2.name} got a boost!`)
            p2log = 0;
            return player2.boost(player2)
        }
        return player2.attack(player1);
    }
}

function play(player1, player2) {
    for (i = 0;player1.health > 0 && player2.health > 0; i++) {
        whoAttack(player1, player2);
        if (player1.health > 0 && player2.health > 0) {
            console.log (`${player1.name} health is ${player1.health}, ${player2.name} health is ${player2.health}`)
        } else if (player1.health > 0 && player2.health <= 0) {
            console.log (`${player1.name} wins`)
        } else if (player2.health > 0 && player1.health <= 0) {
            console.log (`${player2.name} wins`)
        }
    }

}

console.log (play(p1, p2));