let bigArr = [[0,1,0]]
function realArr (num){
    for (i=0; i<num; i++){
        function genArr (i){
            let arr = [0];
            for (j=0; j<i; j++){
                arr.push (bigArr[i-1][i]+bigArr[i-1][i+1])
            }
            arr.push(0);
            console.log (arr)
            bigArr.push(arr)
        }
    }
    console.log (bigArr)
}

realArr (3);