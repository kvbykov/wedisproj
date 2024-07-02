
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

// The observer object that adds the `visible` CSS selector to the element. This 
// selector defines the behavior of elements with the `animated` and `slide-`
// selectors.
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

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
    "index-header": "Best traveling options for the best price. Since 2001",
    "credentials": "\u00A9 2024. Kirill Bykov 230125",
    "weather-header": "Want to be ready? Check the weather",
    "destinations-header": "Check out popular destinations",

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
    "jet-description": "We offer the best private jets in the world. Our jets are equipped with the latest technology and are maintained to the highest standards.",
    "crew-description": "Our crew is the best in the business. We have a team of experienced pilots and flight attendants who are dedicated to making your flight as comfortable as possible.",
    "about-header": "We are a dedicated team committed to providing the best services. Our mission is to deliver high- quality products that meet the needs of our clients.",
    "about-endline": "You are in good hands.",

    // Gallery page.
    "gallery-header": "Our gallery",
    "gallery-text-1": "We offer a wide range of destinations with a wide range of services. Travel, business trip, vacation - we have everything you need.",
    "gallery-text-2": "Best airplanes, best crew, best destinations. We are here to make your trip unforgettable.",
    "gallery-text-3": "Our office is located in the heart of the city. Come visit us and see for yourself. We are always happy to see you.",

    // Portfolio page.
    "portfolio-first-title": "We deliver you",
    "portfolio-second-title": "happiness",
    "flights-number": "Over 100.000 flights around the world in 10 years of operation",
    "crew-number": "Over 1000 crew members",
    "passenger-flow": "Over 1.000.000 passengers each year choose our company.",
    "flights-number-infographic": "100.000+",
    "crew-number-infographic": "1000+",
    "passenger-flow-infographic": "1.000.000+",

    // Blog page.
    "blogHeader": "Our blog",
    "date-1": "January 1, 2024",
    "date-2": "June 25, 2023",
    "date-3": "December 12, 2022",
    "date-4": "October 5, 2022",
    "date-5": "August 15, 2022",
    "date-6": "June 1, 2022",
    "blog-title-1": "The best destinations for a winter vacation",
    "blog-title-2": "The top 10 travel destinations for 2023",
    "blog-title-3": "The best places to visit in Europe",
    "blog-title-4": "The most beautiful beaches in the world",
    "blog-title-5": "The best cities to visit in the United States",
    "blog-title-6": "The newest airplane model is now with us!",
    "blog-text-1": "Winter is a great time to travel. The weather is cold, but the destinations are warm and inviting. Here are some of the best places to visit this winter.",
    "blog-text-2": "The world is a big place, and there are so many amazing destinations to explore. Here are the top 10 travel destinations for 2023.",
    "blog-text-3": "Europe is a continent rich in history, culture, and natural beauty. There are so many amazing places to visit in Europe, from the historic cities of Italy to the stunning fjords of Norway.",
    "blog-text-4": "The world is full of beautiful beaches, from the white sands of the Caribbean to the rugged cliffs of the Pacific Northwest. Here are some of the most beautiful beaches in the world.",
    "blog-text-5": "The United States is a vast and diverse country, with so many amazing cities to visit. From the bustling streets of New York City to the laid-back beaches of California, there is something for everyone in the US.",
    "blog-text-6": "We are excited to announce that we have added the newest airplane model to our fleet. This state-of-the-art aircraft is equipped with the latest technology and is designed to provide the ultimate in comfort and safety for our passengers.",

    // Video Gallery page.
    "video-gallery-header": "Video Gallery",
    "video-gallery-text-1": "We offer first class service for our customers on every flight. No matter where you are going, we will make sure you get there in style.",
    "video-gallery-text-2": "You comfort is our priority. The best team of managers and flight attendants will make sure you have the best experience on board.",
    "video-gallery-text-3": "We have luxury options too. Best private jets in the world. Everything you want is here.",

    // Location page.
    "location-header": "Our locations",
    "location-text": "Come visit us at our office located in the heart of the city. We are easily accessible by public transportation and have ample parking available for visitors.",

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
        },
        {
            name: "Rome, Italy",
            price: "$600",
            image: "images/rome.jpg"
        },
        {
            name: "Bangkok, Thailand",
            price: "$800",
            image: "images/bangkok.jpg"
        },
        {
            name: "Rio de Janeiro, Brazil",
            price: "$950",
            image: "images/rio.jpg"
        },
        {
            name: "Moscow, Russia",
            price: "$700",
            image: "images/moscow.jpg"
        },
        {
            name: "Istanbul, Turkey",
            price: "$650",
            image: "images/istanbul.jpg"
        },
        {
            name: "Dubai, UAE",
            price: "$1300",
            image: "images/dubai.jpg"
        },
        {
            name: "Toronto, Canada",
            price: "$750",
            image: "images/toronto.jpg"
        },
        {
            name: "Berlin, Germany",
            price: "$600",
            image: "images/berlin.jpg"
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





