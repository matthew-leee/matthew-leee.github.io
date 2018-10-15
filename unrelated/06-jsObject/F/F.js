function transform (num) {
    let numArr = num.toString().split("").sort();
    console.log(numArr);
    let key = {
        "1":"a",
        "2":"b",
        "3":"c",
        "4":"d",
        "5":"e",
        "6":"f",
        "7":"g",
        "8":"h",
        "9":"i",
        "0":"j"}
    let ansStr = "";
    for (let element of numArr){
        ansStr += key[element];
    };
    if (ansStr.includes("j")){
        let newStr = ansStr.slice(1);
        return newStr + "j";
    } else {
        return ansStr;
    }
}

console.log(transform(51840));
console.log(transform(213));