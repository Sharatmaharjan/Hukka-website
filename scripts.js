// You can add custom JavaScript here if needed
// For example, form validation or interactive features

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
