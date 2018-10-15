function hongKong (num) {
    for (i=1; i<=num; i++){
        if (i%3 == 0 && i%5 > 0){
            console.log ("Hong")
        } else if (i%3 > 0 && i%5 == 0){
            console.log ("Kong");
        } else if (i%3 == 0 && i%5 == 0){
            console.log ("Hong Kong");
        } else {
            console.log (i);
        }
    }
}

console.log (hongKong(30));