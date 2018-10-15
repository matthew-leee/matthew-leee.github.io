
let d = new Date();
let today = new Date();
// 
let ytd = new Date (d.setDate(d.getDate()-1))
let lat = $("input[name=lat]").val();
let long = $("input[name=long]").val();
let todaySun = $.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=-${long}&date=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}&formatted=0`)
let ytdSun = $.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=-${long}&date=${ytd.getFullYear()}-${ytd.getMonth()+1}-${ytd.getDate()}&formatted=0`)

let todaySunriseD;
let todaySunsetD;
let ytdSunriseD;
let ytdSunsetD;

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
});

ytdSun.done(function(data){
    console.log (data)
    ytdSunrise = data.results.sunrise;
    ytdSunset = data.results.sunset;
    ytdSunriseD = new Date(
        parseInt(ytdSunrise.slice(0,4)),
        parseInt(ytdSunrise.slice(5,7))-1,
        parseInt(ytdSunrise.slice(8,10)),
        parseInt(ytdSunrise.slice(11,13)),
        parseInt(ytdSunrise.slice(14,16)),
        parseInt(ytdSunrise.slice(17,19))
    )
    ytdSunsetD = new Date(
        parseInt(ytdSunset.slice(0,4)),
        parseInt(ytdSunset.slice(5,7))-1,
        parseInt(ytdSunset.slice(8,10)),
        parseInt(ytdSunset.slice(11,13)),
        parseInt(ytdSunset.slice(14,16)),
        parseInt(ytdSunset.slice(17,19))
    )
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
    console.log (`timDiff is ${arrStr[0]}:${arrStr[1]}:${arrStr[2]}`)
}

let combined = $.when(todaySun, ytdSun).done(function(){
    console.log (todaySunriseD)
    console.log (ytdSunriseD)
    timeDiff(ytdSunriseD, todaySunriseD);
});



