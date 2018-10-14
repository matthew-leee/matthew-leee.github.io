// $('input[placeholder*=Telephone]').hide();

// $("tr:nth-child(2)").hide();

// $("section").hide()

function placeholder (value){
    return $(`input[placeholder*=${value}]`).hide();
}

placeholder ("Telephone");