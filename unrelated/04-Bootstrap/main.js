// // failed, unknown reason

// $(document).ready(function(){
//     // to get the url after u click sth
//     var pageUrl = window.location.href;
//     // substring () get the string after a certain index
//     // you have to obtain the index of # but not substring # 
//     var pageId = pageUrl.substring(pageUrl.lastIndexOf("#") + 1);
//     alert ()
//     if (pageId == fourIcon){
//         $(html, body).animate({
//             // scrollTop: how much u needa go down counting from top
//             // offset().top: get the distance from top to your destination
//             scrollTop: $("#"+pageId).offset().top
//             }, 
//             //timegap for scrolling
//             10000
//         )
//     }
// });