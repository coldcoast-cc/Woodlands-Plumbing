// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Chatbot Toggle
$('#chatbot-toggle').click(function(e) {
    e.stopPropagation();
    $('#chatbot').toggleClass('active');
});

// Close chatbot when clicking outside
$(document).click(function(e) {
    if (!$(e.target).closest('#chatbot, #chatbot-toggle').length) {
        $('#chatbot').removeClass('active');
    }
});

// Prevent chatbot from closing when clicking inside it
$('#chatbot').click(function(e) {
    e.stopPropagation();
});

// Function to add chatbot's message
function addChatbotMessage() {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotMessage = document.createElement('div');
    chatbotMessage.classList.add('chatbot-message');
    chatbotMessage.innerHTML = '<p>Hi there! How can I assist you today?</p>';
    chatbotMessages.appendChild(chatbotMessage);
}

// Call the function when the chatbot is opened
document.addEventListener('DOMContentLoaded', addChatbotMessage);
// Contact Form Submission
$('.contact-form').submit(function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});
