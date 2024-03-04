// **********************header*******************//
function togglePopup() {
    const popupNav = document.getElementById('popupNav');
    const navbar = document.getElementById('navbar');
    const mainfoot = document.getElementById('mainfoot');
    const main = document.getElementById('main');
   
  
    if (popupNav.style.display === 'block') {
      popupNav.style.display = 'none';
      navbar.style.display = 'block';
      mainfoot.style.display = 'block';
      main.style.display = 'block';
       // Show the header when closing the popup
    } else {
      popupNav.style.display = 'block';
      navbar.style.display = 'none';
      mainfoot.style.display = 'none';
      main.style.display = 'none';
       // Hide the header when opening the popup
    }
  }
  
  $(document).ready(function() {
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices': true,
       
    });
});

  
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
        errorClass: "error", 
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
  // /////////////////////////////////main////////////////////////////////////////////////////////
  jQuery(document).ready(function(){
      $( "#accordion" ).accordion({
        collapsible: true
      });
  });

  document.getElementById("scrollToMap").addEventListener("click", function() {
    var mapSection = document.getElementById("map");
    window.scrollTo({
        top: mapSection.offsetTop,
        behavior: "smooth"
    });
});

$(document).ready(function () {
    $("#propertyForm").validate({
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
            location:{
                required:true,
                minlength:10
            },
            check:{
                required:true
            },
            message: "required"
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name must be at least 5 characters long"
            },
            email: {
                required: "Please enter a valid email address",
                email: "Please enter a valid email address"
            },
            number: {
                required: "Please enter a valid number",
                number: "Please enter a valid number"
            },
            location:{
                required:"Please enter your complete address",
                minlength:"Please enter your complete address"
            },
            check:{
                required:"check",
            },
            message: {
                required:"Please enter complete description",
            },
        },
        submitHandler: function (form) {
            // You can use AJAX to send the form data to the server here
            alert("Form submitted successfully!");
        }
    });
});
// //////////////////////footer////////////////////////
document.getElementById("scrollToMain").addEventListener("click", function() {
    var mainSection = document.getElementById("Main");
    window.scrollTo({
        top: mainSection.offsetTop,
        behavior: "smooth"
    });
});