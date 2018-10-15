function multiply (x) {
    if (x<=0 || !(typeof x == "number")){
        return false;
    } else if (x >= 0 && x <1000000){
        return x * Math.ceil(1000000/x);
    } else {
        return x;
    }
}

console.log (multiply (3));
