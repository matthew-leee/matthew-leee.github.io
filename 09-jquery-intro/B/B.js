// let peter = $(
//     'tr', {class:"row"}
// )

// let inPeter = $('td')


$("tbody").append("<tr class='row'></tr>");


$("tr:nth-child(4)").append("<td>Peter</td>");
$("tr:nth-child(4)").append("<td>123456789</td>");
$("tr:nth-child(4)").append("<td>peter@gmail.com</td>");

$("header#header h1").text("Matthew's contact list application");

$("td").css("color", "red");


// $("tr:nth-child(4) td:nth-child(1)").text("Peter")
// $("tr:nth-child(4) td:nth-child(2)").text("123456789")
// $("tr:nth-child(4) td:nth-child(1)").text("peter@gmail.com")
