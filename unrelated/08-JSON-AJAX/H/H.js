let image = document.getElementsByClassName("icon");
console.log(typeof (image))
console.log(image[3])
console.log(image[0])

function imageL() {
    for (let i of image) {
        i.addEventListener('mouseenter', function () {
            this.style.width = "500px"
        }, true)
    }
}

imageL();


// failed
// function imageS() {
//     for (let i of image) {
//         i.addEventListener('mouseleave', function () {
//             this.style.width = "200px"
//         }, true)
//     }
// }

// imageS();




let button = document.getElementById("learn-more")
let title = document.getElementById("heading");
console.log(title.textContent);
let buttonText = document.getElementById("buttonText");


button.addEventListener('click', function () {
    button.parentNode.parentNode.style.backgroundColor = "transparent";
    title.textContent = "Welcome to my Flower Shop";
    title.style.color = "blue";
    title.style.backgroundColor = "yellow";
    buttonText.textContent = "buy flowers";
    button.style.backgroundColor = "red";
});

// unsuccessful attempt

// let image = document.getElementsByClassName("icon");


// function image40up(){
//     image.map(function(x){
//     x.addEventListener('mouseenter', function(e){
//         e.target.style.minwidth= `${(50*1.4)}px`
//     })
// })
// }


// // let image40down = function (){
// //     image.map(function(x){
// //         x.removeEventListener("mouseleave", image40up)
// //     })
// // };

// let button = document.getElementsById("learn-more");
// let blackOverlay = document.getElementsByClassName("banner");
// let title = document.getElementsByClassName("bigTitle");
// let buttonText = document.getElementById("buttonText");

// // let buttonClick = function (req1, req2, req3){
// //     button.addEventListener('click', function(req1, req2, req3){
// //         req1.style.backgroundColor = "transparent";
// //         req2.textContent = "Welcome to my Flower Shop";
// //         req2.style.color = "blue";
// //         req2.style.backgroundColor = "yellow";
// //         req3.textContent = "buy flowers";
// //         button.style.backgroundColor = "red";
// //     }); 
// // }

// // image40up;
// // image40down();
// // buttonClick(blackOverlay, title, buttonText);

// button.addEventListener('click', function(blackOverlay, title, buttonText){
//     blackOverlay.style.backgroundColor = "transparent";
//     title.textContent = "Welcome to my Flower Shop";
//     title.style.color = "blue";
//     title.style.backgroundColor = "yellow";
//     buttonText.textContent = "buy flowers";
//     button.style.backgroundColor = "red";
// }); 

// image.map(function(x){
//     x.removeEventListener("mouseleave", image40up)
// })

// button.style.backgroundColor = "red";