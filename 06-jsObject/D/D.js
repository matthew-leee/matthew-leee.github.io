// no array is given so i make up one

let results = [99, 98, 88, 78, 68];

let avgArr = function (arr){
    let sum = arr.reduce (function (accu, num){
        return accu + num;
    });
    let avg = Math.round(sum/arr.length) ;
    return avg;
}

console.log(avgArr(results));