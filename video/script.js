$(document).ready(function () {
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 5 // Minimum length of 5 characters
            },
            email: {
                required: true,
                email: true
            },
            number: {
                required: true,
                number: true // Validates that the input is a number
            },
            message: "required"
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name must be at least 5 characters long"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            number: {
                required: "Please enter your phone number",
                number: "Please enter a valid number"
            },
            message: "Please enter a message"
        },
        submitHandler: function (form) {
            // You can use AJAX to send the form data to the server here
            alert("Form submitted successfully!");
        }
    });
});
function openContactForm() {
  document.getElementById('contact-form-overlay').style.display = 'block';
}

function closeContactForm() {
  document.getElementById('contact-form-overlay').style.display = 'none';
}

document.querySelector('.contact-button').addEventListener('click', openContactForm);
