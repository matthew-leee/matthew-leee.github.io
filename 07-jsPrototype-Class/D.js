class Monster {
    constructor(option) {
        this.health = option.health;
    }

    wound(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            console.log(`monster dead`);
        }
    }

    hero() {
        if (this.health >= 0) {
            let hDamage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
            this.wound(hDamage);
            console.log(`hero damage is ${hDamage}`);
            console.log(`current health is ${this.health}`);
        }

    }
}

// hero = function (obj) {
//     if (obj.health >= 0) {
//         let hDamage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
//         obj.wound(hDamage);
//         console.log(`hero damage is ${hDamage}`);
//         console.log(`current health is ${obj.health}`);
//     }


let Doge = new Monster({ health: 100 })
console.log(Doge.health)
console.log(Doge.hero());
console.log(Doge.hero());
console.log(Doge.hero());
console.log(Doge.hero());
console.log(Doge.hero());
console.log(Doge.hero());
console.log(Doge.hero());
console.log(Doge.hero());
console.log(Doge.hero());
console.log(Doge.hero());
console.log(Doge.hero());
console.log(Doge.hero());
