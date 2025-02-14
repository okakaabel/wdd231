// Toggle the hamburger menu on mobile screens
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Form submission for membership and contact
document.getElementById('membership-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your membership application has been submitted.');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent. Thank you for contacting us!');
});
