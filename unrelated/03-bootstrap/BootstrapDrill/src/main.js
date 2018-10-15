var form = document.querySelector ('.need-validation');
form.addEventListener('submit', function(event){
    // checkValidity: browser build-in function to check
    if (form.checkValidity() === false) {
        // if not valid then stop default (i.e. submitting)
        event.preventDefault();
        event.stopPropagation();
    }
    // use tgt with form top wrapper class: need validation
    form.classList.add('was-validated')
})