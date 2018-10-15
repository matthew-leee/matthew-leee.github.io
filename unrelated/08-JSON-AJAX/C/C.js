function inSpace (callback) {
    let http = new XMLHttpRequest ();

    http.open("GET", `http://api.open-notify.org/astros.json`)

    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            callback(http.responseText)
        } else {
            console.log('error occurred' + http.status);
        }
    }
    
    http.send();
}

inSpace (function(data){
    let jsonData = JSON.parse(data);
    // use map to manipulate more clever man
    for (i=0; i<jsonData.people.length; i++){
        console.log (jsonData.people[i].name);
    }
})