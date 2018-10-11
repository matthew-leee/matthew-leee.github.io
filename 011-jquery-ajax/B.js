function informMe (endpoint, value){
    $.get(`https://restcountries.eu/rest/v2/${endpoint}/${value}`).done(function(data){
        console.log (data);
    }).fail(function(){
        console.log ("you are fucked")
    })
}

informMe ("capital", "Tokyo")