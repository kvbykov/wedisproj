
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animated');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Add event listener to perform `Contact` form validation and API call.
    const contactForm = document.getElementById('contactForm');
    contactForm?.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        // TODO: Add form validation.
    });
});
