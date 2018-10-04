// reverse(12345) // [5,4,3,2,1]

function reverse (num) {
    let x = num.toString();
    let arr = [];
    for (i=x.length-1; i>=0; i--) {
        arr.push(x[i])
    }
    return arr;
}

console.log (reverse(12345));