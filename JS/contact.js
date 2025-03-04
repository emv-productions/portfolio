document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("5xlp7dDJIz26fpQCj");
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    if(validateRecaptcha()){
        let params = {
            nombre: document.getElementById("txtName").value.toUpperCase() + " " + document.getElementById("txtLastName").value.toUpperCase(),
            email: document.getElementById("txtEmail").value.toLowerCase(),
            mensaje: document.getElementById("txtMessage").value.toUpperCase()
        };
    
        emailjs.send("service_am2tkym", "template_g8srbya", params)
            .then(function (response) {
                confirmAlert();
                deleteFields();
            }, function (error) {
                errorAlert(error.text);
            });
    }
    else
    {
        warningAlert();
    }
});

function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        return false;
    }
    return true;
}

function confirmAlert() {
    Swal.fire({
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        title: 'Message sent successfully!',
        icon: 'success',
    })
}

function warningAlert() {
    Swal.fire({
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        title: 'Please check reCAPTCHA',
        icon: 'warning',
        timer: 2000,
        showConfirmButton: false
    })
}

function errorAlert(errorText) {
    Swal.fire({
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        title: 'Message could not be sent. ' + errorText,
        icon: 'error',
    })
}

function deleteFields() {
    document.getElementById("txtName").value = '';
    document.getElementById("txtLastName").value = '';
    document.getElementById("txtEmail").value = '';
    document.getElementById("txtMessage").value = '';
}