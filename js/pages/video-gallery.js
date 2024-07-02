document.addEventListener('DOMContentLoaded', async function () {
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

    // Loop through all the elements and add the observer (see main.js) to them.
    //
    // The delay of 100 milliseconds makes the animation look prettier.
    for (let i = 0; i < animatedElements.length; i++) {
        const element = animatedElements[i];
        await delay(100);
        observer.observe(element);

    }
});
