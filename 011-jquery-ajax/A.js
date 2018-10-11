$.get("data.json").done(function(data){
    console.log (data)
}).fail(function(){
    console.log ("fuck you")
}).always(function(){
    console.log ("im learning AJAX")
});
