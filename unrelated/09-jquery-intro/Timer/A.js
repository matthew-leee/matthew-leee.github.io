function minuteAlarm(sec) {
    if (!(sec >= 1 && sec <= 60)) {
        alert(`type sth between 1 to 60 fuck you bitch`)
        return false;
    };
    let time = sec * 1000;
    let d = new Date();
    let cSec = d.getTime() + time;
    d.setTime(cSec);
    setTimeout(function () {
        console.log(`Alarm rining at ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
    }, time
    )
}

minuteAlarm(1770);