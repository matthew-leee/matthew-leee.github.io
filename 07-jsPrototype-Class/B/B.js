let Player = function (name, health) {
    this.name = name;
    this.health = health;
    this.attack = function (opponent) {
        opponent.health -= 10;
    }
}

let p1 = new Player("Ariana", 100);
let p2 = new Player("Pete", 100);

function whoAttack(player1, player2) {
    let x = Math.random();
    if (x < 0.5) {
        return player1.attack(player2);
    } else {
        return player2.attack(player1)
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