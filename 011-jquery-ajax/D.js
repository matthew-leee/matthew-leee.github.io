let lat = $("input[name=lat]").val();
let long = $("input[name=long]").val();

$.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=-${long}&formatted=0`).done(function(data){
    console.log (data);
    // let dataArr = JSON.parse(data);
    console.log(`Tokyo sunrise is at ${data.results.sunrise}
    Tokyo sunset is at ${data.results.sunset}`)
}).fail(function(){
    console.log("failed")
})

