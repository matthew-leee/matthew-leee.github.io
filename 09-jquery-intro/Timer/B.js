// let tapCount = 0;
// let tapOff = 1;

// function turnOffTap (sec) {
//     if (tapCount > sec){
//         tapOff--;
//     }
// }

function drippingTap (){
    for (i=0; i<10 ; i++){
        setTimeout(function(){
            console.log ("drip")
        }, 1000)
    }
}

// turnOffTap(10);
drippingTap();

