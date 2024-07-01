
document.addEventListener('DOMContentLoaded', initAbout);

async function initAbout() {
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

    for (let i = 0; i < animatedElements.length; i++) {
        const element = animatedElements[i];
        await delay(100);
        observer.observe(element);

    }
}
