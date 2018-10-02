//“a” - 6 “b” - 1 “d” - 7 “e” - 4 “i” - 3 “l” - 2 “m” - 9 “n” - 8 “o” - 0 “t” - 5

function decode (x) {
    if (x < 100 || x > 999999) { 
        return false;
    } else {
        let str = x.toString();
        let key = {
            "6":"a",
            "1":"b",
            "7":"d",
            "4":"e",
            "3":"i",
            "2":"l",
            "9":"m",
            "8":"n",
            "0":"o",
            "5":"t",
            }
        let ans = "";
        for (i = 0; i<str.length; i++){    
            ans += key[str[i]]
        }
    } return ans;
}


console.log (decode(23456));