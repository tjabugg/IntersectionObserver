// Options let you control the circumstances under which the observer's callback is invoked
// Root is the element that is used as the viewport for checking visibility of the target
// rootMargin is the margin around the root. Can have values similar to the CSS margin property, e.g. "10px
// threshold is a number which indicates at what percentage of the target's visibility the observer's callback should be executed.

// returns all elements in the document that matches 'animate'
const revealers = document.querySelectorAll(".fade-in");

const appearOptions = {
    //1 means that it fades in once all of is in view
    threshold: 0.5
};

//Create instance of IntersectionObserver
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        // console.log(entries);
        //For each entry
        entries.forEach(entry => {
            //If it is not intersecting
            if (!entry.isIntersecting) {
                //Exit
                return;
                //But if it is intersecting with the page
            } else {
                //Once it's in view, add the css style to that property
                //Dataset contains all of our custom attributes
                entry.target.classList.add("appear");
                // appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

//For each image
//Call observe on all of the html elements 
revealers.forEach(revealer => {
    appearOnScroll.observe(revealer);
})


// All we do is grab the current scroll position of the window, 
// figure out what percentage of the element in question is now off-screen, 
// and set its opacity with that percentage.

//The dollar sign function $() in jQuery is a library function that is frequently used
const target = $('h1');
//outerHeight() - returns the outer height of an element (includes padding and border)
let targetHeight = target.height();

// The scroll() method triggers the scroll event, or attaches a function to run when a scroll event occurs.
$(document).scroll(function (e) {
    let scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if (scrollPercent >= 0) {
        target.css('opacity', scrollPercent);
    }
});