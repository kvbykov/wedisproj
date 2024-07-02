document.addEventListener('DOMContentLoaded', initGallery);

async function initGallery() {
    const animatedElements = document.querySelectorAll('.animated');

    // Loop through all the elements and add the observer to them. 
    //
    // The delay of 100 milliseconds makes the animation look prettier.
    for (let i = 0; i < animatedElements.length; i++) {
        const element = animatedElements[i];
        await delay(200);
        observer.observe(element);
    }
}
