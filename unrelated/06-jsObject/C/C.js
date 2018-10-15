var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

let filPlayers = players.filter(function(player){
    return player.club.includes("Barcelona");
})

console.log (filPlayers);

let playerName = filPlayers.map(function(x){
    console.log (x.name);
})
