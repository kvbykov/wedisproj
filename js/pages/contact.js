document.addEventListener('DOMContentLoaded', async function () {
    const animatedElements = document.querySelectorAll('.animated');

    // Observer for the animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Loop through all the elements and add the observer to them
    for (let i = 0; i < animatedElements.length; i++) {
        const element = animatedElements[i];
        observer.observe(element);
        await delay(200);
    }

    // Add event listener to perform `Contact` form validation and API call
    const contactForm = document.getElementById('contact-form');
    contactForm?.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        if (!name) {
            isValid = false;
            showError('name', 'Full Name is required');
        } else if (!validateName(name)) {
            isValid = false;
            showError('name', 'Name should contain only uppercase or lowercase letters');
        } else {
            clearError('name');
        }

        if (!email) {
            isValid = false;
            showError('email', 'Email is required');
        } else if (!validateEmail(email)) {
            isValid = false;
            showError('email', 'Please enter a valid email address');
        } else {
            clearError('email');
        }

        if (!message) {
            isValid = false;
            showError('message', 'Message is required');
        } else {
            clearError('message');
        }

        return isValid;
    }

    /**
        Shows an error message below the field
     */
    function showError(fieldId, message) {
        const id = `error-message-${fieldId}`;
        const existing = document.getElementById(id);
        if (existing) {
            existing.innerText = message;
            return;
        }

        const field = document.getElementById(fieldId);
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = message;
        errorElement.id = id;
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }

    /**
        Removes an error message from validated field, if any
    */
    function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorElement = document.getElementById(`error-message-${fieldId}`);
        if (errorElement) {
            errorElement.remove();
        }
    }

    /**
        Validates given `email` using regular expression
    */
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    /**
        Validates given `name` using regular expression
    */
    function validateName(name) {
        const re = /^[a-zA-Z\s]+$/;
        return re.test(name);
    }
});
