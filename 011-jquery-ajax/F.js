

function someWhereTime(latitude, longtitude){
    let today = new Date();
    let todaySun = $.get(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=-${longtitude}&date=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}&formatted=0`)
    
    let HKSun = $.get(`https://api.sunrise-sunset.org/json?lat=22.3964&lng=-114.1095&date=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}&formatted=0`)


    let todaySunriseD;
    let todaySunsetD;
    let HKSunriseD;
    let HKSunsetD;

    todaySun.done(function(data){
        console.log (data);
        todaySunrise = data.results.sunrise;
        todaySunset = data.results.sunset;
        todaySunriseD = new Date(
            parseInt(todaySunrise.slice(0,4)),
            parseInt(todaySunrise.slice(5,7))-1,
            parseInt(todaySunrise.slice(8,10)),
            parseInt(todaySunrise.slice(11,13)),
            parseInt(todaySunrise.slice(14,16)),
            parseInt(todaySunrise.slice(17,19))
        )
        todaySunsetD = new Date(
            parseInt(todaySunset.slice(0,4)),
            parseInt(todaySunset.slice(5,7))-1,
            parseInt(todaySunset.slice(8,10)),
            parseInt(todaySunset.slice(11,13)),
            parseInt(todaySunset.slice(14,16)),
            parseInt(todaySunset.slice(17,19))
        )
        console.log (todaySunsetD)
    });
    
    HKSun.done(function(data){
        console.log (data);
        HKSunrise = data.results.sunrise;
        HKSunset = data.results.sunset;
        HKSunriseD = new Date(
            parseInt(HKSunrise.slice(0,4)),
            parseInt(HKSunrise.slice(5,7))-1,
            parseInt(HKSunrise.slice(8,10)),
            parseInt(HKSunrise.slice(11,13)),
            parseInt(HKSunrise.slice(14,16)),
            parseInt(HKSunrise.slice(17,19))
        )
        HKSunsetD = new Date(
            parseInt(HKSunset.slice(0,4)),
            parseInt(HKSunset.slice(5,7))-1,
            parseInt(HKSunset.slice(8,10)),
            parseInt(HKSunset.slice(11,13)),
            parseInt(HKSunset.slice(14,16)),
            parseInt(HKSunset.slice(17,19))
        )
        console.log (HKSunsetD);
    });

    function timeDiff (day1, day2){
        let diffMs = day2 - day1;
        console.log (diffMs)
        let secTotal = diffMs / 1000;
        let hr = Math.floor(secTotal / 3600);
        let min = Math.floor((secTotal - hr*3600)/60);
        let sec = secTotal - hr*3600 - min*60;
        let arrTime = [hr, min, sec];
        let arrStr = [];
        for (let x of arrTime){
            if (x<10){
                arrStr.push(`0${x.toString()}`);
            } else {
                arrStr.push(x.toString());
            }
        } 
        console.log (arrStr);
        console.log (`timeDiff is ${arrStr[0]}:${arrStr[1]}:${arrStr[2]}`)
        return `${arrStr[0]}:${arrStr[1]}:${arrStr[2]}`
    }
    
   

    let combined = $.when(todaySun, HKSun).done(function(){
        aDay = todaySunsetD - todaySunriseD;
        console.log (aDay)
        HKDay = HKSunsetD - HKSunriseD;
        console.log (HKDay)
        let compare = HKDay - aDay;
        console.log (compare);
        if (compare > 0){
            console.log (`Hong Kong Daytime is longer by ${timeDiff(aDay, HKDay)}`)
        } else if  (compare < 0){
            console.log (`Hong Kong Daytime is shorter by ${timeDiff(HKDay, aDay)}`)
        } else {
            console.log ("there is no diff in day length")
        }
    })  
}


// function timeDiff (day1, day2){
//     let diffMs = day2 - day1;
//     console.log (diffMs)
//     let secTotal = diffMs / 1000;
//     let hr = Math.floor(secTotal / 3600);
//     let min = Math.floor((secTotal - hr*3600)/60);
//     let sec = secTotal - hr*3600 - min*60;
//     let arrTime = [hr, min, sec];
//     let arrStr = [];
//     for (let x of arrTime){
//         if (x<10){
//             arrStr.push(`0${x.toString()}`);
//         } else {
//             arrStr.push(x.toString());
//         }
//     } 
//     console.log (arrStr);
//     console.log (`timDiff is ${arrStr[0]}:${arrStr[1]}:${arrStr[2]}`)
// }

let lat = $("input[name=lat]").val();
let long = $("input[name=long]").val();
90
someWhereTime(lat,long);






