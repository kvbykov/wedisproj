document.addEventListener('DOMContentLoaded', initGallery);

async function initGallery() {
    const animatedElements = document.querySelectorAll('.animated');

    // Create the observer object that adds the `visible` CSS selector to the
    // element. This selector changes the opacity and applies Y-transform.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Loop through all the elements and add the observer to them. 
    //
    // The delay of 100 milliseconds makes the animation look prettier.
    for (let i = 0; i < animatedElements.length; i++) {
        const element = animatedElements[i];
        await delay(200);
        observer.observe(element);
    }
}
