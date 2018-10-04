function middle (arr){
    let arrDummy = [arr[0],arr[1],arr[2]]
    let max = arrDummy.reduce(function(a,b){
        return Math.max(a,b)
    })
    let min = arrDummy.reduce(function(a,b){
        return Math.min(a,b)
    })
    let mid1 = arrDummy.splice(arrDummy.indexOf(max))
    let mid2 = mid1.splice(mid1.indexOf(min))
    let ans = mid2[0];
    return arr.indexOf(ans);
}

console.log (middle([2,6,4]))
    
console.log ('i'.charCodeAt(0))