// var http = new XMLHttpRequest();

// http.open("GET", 'https://restcountries.eu/rest/v2/capital/Madrid', true);

// http.onreadystatechange = function() {
//     if(http.readyState != XMLHttpRequest.DONE) {
//         return;
//     } else if(http.status == 200) {
//         let country = JSON.parse(http.responseText["name"])
//         console.log(country);
//     } else {
//         console.log('error occurred' + http.status);
//     }
// }

// http.send();

// searching by capital
function tellme (endpoint, value, callback){
    let http = new XMLHttpRequest();

    http.open("GET", `https://restcountries.eu/rest/v2/${endpoint}/${value}`);
    
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

tellme ('capital', 'Berlin', function(data){
    console.log(JSON.parse(data))
})