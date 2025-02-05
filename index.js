
// ----------------- Loader Start ------------------
window.addEventListener("load", () => {
    let loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})
// ----------------- Loader End ------------------
// ----------------- Header Start ------------------
let ToggleMenu = document.querySelector("header nav .toggle-menu");
let HeaderMenu = document.querySelector("header nav ul");
ToggleMenu.addEventListener("click", () => {
    HeaderMenu.style.display = "flex";
})
// ------------------ Header End -------------------
//----------------- Landing start -------------------
let landing = document.querySelector(".landing");
let LandingBullts = document.querySelectorAll(".landing .bullets li");
let Arrows = document.querySelectorAll(".landing i");


let LandingBackgrounds = [
    "url('images/landing-left.webp')",
    "url('images/landing.webp')",
    "url('images/landing-right.webp')"
];

let currIndex = 0; // Track the active bullet/page

// Function to update active bullet and display 2 persons
function updateLandingBack(index) {
    // Remove active class from all bullets
    LandingBullts.forEach((bullt) => bullt.classList.remove("active"));

    // Add active class to the current bullet
    LandingBullts[index].classList.add("active");

    // Update the background of the landing page
    landing.style.backgroundImage = LandingBackgrounds[index];
    landing.style.transition = "background-image 0.5s ease-in-out"; // Smooth transition
}

// Event listeners for manual click on bullets
LandingBullts.forEach((bullt, index) => {
    bullt.addEventListener("click", function () {
        currIndex = index; // Update current page
        updateLandingBack(index);
    });
});
// Event listeners for manual click on arrows
Arrows.forEach((arrow, index) => {
    arrow.addEventListener("click", function () {
        if (index == 0) {
            currIndex = (currIndex - 1 + LandingBullts.length) % LandingBullts.length;
        } else {
            currIndex = (currIndex + 1) % LandingBullts.length;
        }
        updateLandingBack(currIndex);
    });
});
// Auto-switch to the next bullet every 8 seconds
setInterval(() => {
    currIndex = (currIndex + 1) % 3; // Cycle through 3 bullets/pages (0, 1, 2)
    updateLandingBack(currIndex);
}, 8000); // 8000 ms = 8 seconds

// Initialize the first background
updateLandingBack(0);

//---------------- Landing End ---------------------

//-------------- Portfolio Start--------------------

// Define variables
const inactivebtn = document.querySelectorAll(".port-menu li");
const allimages = document.querySelectorAll(".pictures-container .box");
const morebtn = document.querySelector(".more");
const lessbtn = document.querySelector(".less");
const itemsPerPage = 8; // Set the number of items per page

// Function to hide extra images based on a category
function hideExtraImages(category) {
    let cnt = 0;

    allimages.forEach((image) => {
        const imageCategory = image.classList[1]?.toUpperCase() || "";

        if ((category === "ALL" || imageCategory === category) && cnt < itemsPerPage) {
            image.style.display = "block";
            cnt++;
        } else {
            image.style.display = "none";
        }
    });
}

// Function to show all images of the current category
function showAllImages(category) {
    allimages.forEach((image) => {
        const imageCategory = image.classList[1]?.toUpperCase() || "";

        if (category === "ALL" || imageCategory === category) {
            image.style.display = "block";
        }
    });

    morebtn.style.display = 'none';
    lessbtn.style.display = 'block';
}
// Function to show less images of the current category
function showLessImages(category) {
    let cnt = 0;
    allimages.forEach((image) => {
        const imageCategory = image.classList[1]?.toUpperCase() || "";

        if (category === "ALL" || imageCategory === category) {
            image.style.display = "block";
            cnt++;
        }
        if (cnt > 8) {
            image.style.display = "none";
        }
    });

    lessbtn.style.display = 'none';
    morebtn.style.display = 'block';
}

// Event listener for "More" button
if (morebtn) {
    morebtn.addEventListener("click", () => {
        const activeBtn = document.querySelector(".port-menu li.active");
        const activeCategory = activeBtn ? activeBtn.textContent.toUpperCase() : "ALL";
        showAllImages(activeCategory);
    });
}
// Event listener for "Less" button
if (lessbtn) {
    lessbtn.addEventListener("click", () => {
        const activeBtn = document.querySelector(".port-menu li.active");
        const activeCategory = activeBtn ? activeBtn.textContent.toUpperCase() : "ALL";
        showLessImages(activeCategory);
    });
}

// Event listeners for category buttons
inactivebtn.forEach((button) => {
    button.addEventListener("click", function () {
        // Handle active class toggle
        const activeBtn = document.querySelector(".port-menu li.active");
        if (activeBtn) activeBtn.classList.remove("active");
        button.classList.add("active");

        // Filter images based on the button clicked
        const category = button.textContent.toUpperCase();
        hideExtraImages(category);

        // Reset "More" button background color
        morebtn.style.display = 'block';
        lessbtn.style.display = 'none';
    });
});

// Initial setup: hide extra images and show "ALL" category by default
hideExtraImages("ALL");

//----------- Portfolio End----------------


//----------- Stats Start----------------
let StatsSection = document.querySelector(".stats");
let Animated = false; // Flag to prevent multiple animations

// Get the start and end scroll limits
let StatsSectionStart = StatsSection.offsetTop;
let StatsSectionEnd = StatsSectionStart + StatsSection.offsetHeight;

let valueDisplays = document.querySelectorAll(".stats h3");
let interval = 4000;

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition > StatsSectionStart && scrollPosition < StatsSectionEnd && !Animated) {
        Animated = true;
        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
    }
})


//------------ Stats End ----------------


//----------- Skills start --------------

let bullts = document.querySelectorAll(".skills .testimonials .bullets li");
let person = document.querySelectorAll(".skills .testimonials .text p");
let Personimage = document.querySelectorAll(".skills .testimonials .content img");

let PersonsInfos = [
    "Daoudi Moaad | Engineer",
    "Babou Elhassan | Engineer",
    "EL hilali ayoub | CEO",
    "Lamaizi amin | Manager",
    "Elbouabdellauoi Ibrahim | Media manager",
    "Ait'Mhammed Issmail | Marketer"
];

let PersonsImages = [
    "images/moaad.webp",
    "images/elhassan.webp",
    "images/ayoub.jpg",
    "images/amin.jpg",
    "images/brahim.webp",
    "images/smail.jpg"
];

let currentIndex = 0; // Track the active bullet/page

// Function to update active bullet and display 2 persons
function updateActivePage(index) {
    // Remove active class from all bullets
    bullts.forEach((bullt) => bullt.classList.remove("active"));

    // Add active class to the current bullet
    bullts[index].classList.add("active");

    // Display 2 persons for the current page
    let start = index * 2; // Calculate the starting index of persons
    person.forEach((element, i) => {
        element.innerText = PersonsInfos[start + i]; // Update person info
    });
    Personimage.forEach((image, i) => {
        image.src = PersonsImages[start + i]; // Update person image
    });
}

// Event listeners for manual click on bullets
bullts.forEach((bullt, index) => {
    bullt.addEventListener("click", function () {
        currentIndex = index; // Update current page
        updateActivePage(index);
    });
});

// Auto-switch to the next bullet every 2 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % 3; // Cycle through 3 bullets/pages (0, 1, 2)
    updateActivePage(currentIndex);
}, 6000); // 2000 ms = 2 seconds


let section = document.querySelector(".skills");

// Get the start and end scroll limits
let sectionStart = section.offsetTop;
let sectionEnd = sectionStart + section.offsetHeight;

// Get the progSpan
let progSpans = document.querySelectorAll(".skills .skills-clm .prog-holder .prog span");
let hasAnimated = false; // Flag to prevent multiple animations

window.addEventListener("scroll", () => {

    let scrollPosition = window.scrollY;

    // Check if in the scroll range and animation hasn't run yet
    if (scrollPosition > sectionStart && scrollPosition < sectionEnd && !hasAnimated) {

        hasAnimated = true; // Prevent re-triggering

        progSpans.forEach((progSpan) => {

            let startValue = 10;
            let endValue = parseInt(progSpan.getAttribute("data-progress")) || 0; // Fallback to 0
            if (endValue > 0) { // Only animate if `endValue` is valid

                let duration = Math.floor(interval / endValue);
                let counter = setInterval(() => {
                    // Increment the start value by 1
                    startValue += 1;
                    progSpan.style.width = startValue + "%";

                    if (startValue >= endValue) {
                        clearInterval(counter);
                    }
                }, duration);

            }

        });

    }
});


//------------ Skills End ----------------
