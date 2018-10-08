class User {
    constructor(options){
        this.gender = options.gender;
        this.first= options.first;
        this.last= options.last;
        this.email= options.email;
        this.date= options.date;
    }
}

function ranUser (callback) {
    let http = new XMLHttpRequest ();

    http.open("GET", `https://randomuser.me/api/`)

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

function manyUsers (num){
    for (i=0; i<num; i++){
        ranUser (function(data){
            let jData = JSON.parse(data);
            let user = new User({
                gender: `${jData.results[0].gender}`,
                first: `${jData.results[0].name.first}`, 
                last: `${jData.results[0].name.last}`,
                email: `${jData.results[0].email}`,
                date: `${jData.results[0].registered.date}`,
            })
            console.log (user)
        })
    }
}

console.log (manyUsers(5));
