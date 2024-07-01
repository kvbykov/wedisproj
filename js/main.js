
// Perform app initialization.
document.addEventListener('DOMContentLoaded', initApp);

/**
 * Initializes the website.
 * 
 * Places reusable elements and text content on the pages where they are used. 
 */
function initApp() {
    // Insert the `Navigation` block into the placeholder.
    const navElement = document.getElementById('navigation');
    if (navElement) { navElement.innerHTML = navigation; }

    // Use the string assets to set the text content of the elements.
    for (elementId in stringAssets) {
        setTextContent(elementId);
    }
}

/**
    Sets the text content from `stringAssets` to the element with the provided
    `elementId`.
**/
function setTextContent(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = stringAssets[elementId];
    }
}

/**
    Creates a delay for the specified number of milliseconds.

    Used for animations.
**/
function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

/**
    Contains all text assets for the website.

    Note: It is decided to store this in `main.js` because it's used on every
    page of the website.
**/
const stringAssets = {
    // Index page.
    "title": "Flight Ticket Reservations",
    "header": "Best travelling options for the best price. Since 2001",
    "credentials": "\u00A9 2024. Kirill Bykov 230125",
    "weatherHeader": "Want to be ready? Check the weather",
    "popularDestinations": "Check out popular destinations",

    // Navigation buttons.
    "home": "Home",
    "about": "About",
    "gallery": "Gallery",
    "contact": "Contact",
    "blog": "Blog",
    "location": "Location",
    "videoGallery": "Video Gallery",
    "portfolio": "Portfolio",

    // About page.
    "jetDescription": "We offer the best private jets in the world. Our jets are equipped with the latest technology and are maintained to the highest standards.",
    "crewDescription": "Our crew is the best in the business. We have a team of experienced pilots and flight attendants who are dedicated to making your flight as comfortable as possible.",
    "aboutHeader": "We are a dedicated team committed to providing the best services. Our mission is to deliver high- quality products that meet the needs of our clients.",
    "aboutEndLine": "You are in good hands.",

    // Gallery page.
    "galleryHeader": "Our gallery",
    "galleryTest1": "Check out our gallery to see some of the amazing destinations we have to offer.",
    "galleryTest2": "Check out our gallery to see some of the amazing destinations we have to offer.",
    "galleryTest3": "Check out our gallery to see some of the amazing destinations we have to offer.",
    // Destinations.
    destinations: [
        {
            name: "Paris, France",
            price: "$500",
            image: "images/paris.jpg"
        },
        {
            name: "New York, USA",
            price: "$700",
            image: "images/newyork.jpg"
        },
        {
            name: "Tokyo, Japan",
            price: "$900",
            image: "images/tokyo.jpg"
        },
        {
            name: "Sydney, Australia",
            price: "$1200",
            image: "images/sydney.jpg"
        },
        {
            name: "Cape Town, South Africa",
            price: "$1100",
            image: "images/capetown.jpg"
        }
    ],
};

/**
    Reusable `Navigation` element.

    Note: It is decided to store this in `main.js` because it's used on every
    page of the website.
**/
const navigation = `
        <nav>
            <ul>
                <li><a href="index.html" id="home"></a></li>
                <li><a href="about.html" id="about"></a></li>
                <li><a href="gallery.html" id="gallery"></a></li>
                <li><a href="portfolio.html" id="portfolio"></a></li>
                <li><a href="blog.html" id="blog"></a></li>
                <li><a href="location.html" id="location"></a></li>
                <li><a href="video-gallery.html" id="videoGallery"></a></li>
                <li><a href="contact.html" id="contact"></a></li>
            </ul>
        </nav>
    `;





