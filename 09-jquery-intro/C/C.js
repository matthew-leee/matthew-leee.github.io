$(document).ready(function () {
    // put all things inside
})


$("#row-submit").after(`
<div id='row-clear'>
    <button id='btn-Clear'>
        Clear
    </button>
</div>`)

$("#form1").after(`
<form id="form2">
    <div id="title">
        <h1>Update form</h1>
    </div>
    <div id="row-name2">
        <input type='text' name="name" placeholder="Name"/>
    </div>
    <div id="row-phone2">
        <input type='text' name="phone" placeholder="Telephone Number"/>
    </div>
    <div id="row-email2">
        <input type='text' name="email" placeholder="Email"/>
    </div>
    <div id="row-submit2">
        <input id = "submit" type="submit" value="submit"/>
    </div>
</form>
`)

$("#btn-Clear").click(function (event) {
    event.preventDefault();
    name = null;
    phone = null;
    email = null;
    alert("test");
});

$("form").on("submit", function (event) {
    event.preventDefault();
    var name = $("input[name='name']").val();
    var phone = $("input[name='phone']").val();
    if (name.length >= 50) {
        $("#row-name input[name='name']").after("<p>your name is too long</p>");
        $("#row-phone input[name='name']").css("border", "solid red 1px");
    } else if (phone.toString().length < 6 || phone.toString().length > 16) {
        $("#row-phone input[name='phone']").after("<p>your phone no. is suspicious</p>");
        $("#row-phone input[name='phone']").css("border", "solid red 1px");
    } else {
        alert("Form submitted name:"+name+", email:"+email+", phone:"+phone+"");
    }
})

$("tr.row").on("click", function(){
    var nameR = this.childNodes[0].innerText;
    var phoneR = this.childNodes[1].innerText;
    var emailR = this.childNodes[2].innerText;
    console.log (nameR);
    $("#row-name2 input[name='name']").val() = nameR;
    $("#row-phone2 input[name='phone']").val() = phoneR;
    $("#row-email2 input[name='phone']").val() = emailR;
})