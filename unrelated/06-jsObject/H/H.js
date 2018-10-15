function move (str) {
    let strArr = str.split("");
    let ans = strArr.map(function(x){
        let code = x.charCodeAt(0) + 10;
        if (code > "z".charCodeAt(0)){
            x = String.fromCharCode(code-26);
        } else {
            x = String.fromCharCode(code);
        }
        return x;
    })
    return ans.join("");
}

console.log (move("xyz"));

