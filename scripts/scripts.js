

function gsapanimations(){
    gsap.to(".animations1", {duration: 2, opacity: 1, ease: Sine.easeOut});
    gsap.to(".animations2", {delay: 0, duration: 1, opacity: 1, y:"-10%", ease: Sine.easeOut});
    gsap.to(".animations3", {delay: 0.3, duration: 1, opacity: 1, y:"10%", scrollTrigger: ".animations3"});
    gsap.to(".animations4", {delay: 0, duration: 2, opacity: 1, y:"50px",scrollTrigger: ".animations4"});
    gsap.to(".animations5", {delay: 0, duration: 2, opacity: 1, y:"50px",scrollTrigger: ".animations5"});
    gsap.to(".animations6", {delay: 0, duration: 2, opacity: 1, y:"50px",scrollTrigger: ".animations5"});
    gsap.to(".animations7", {delay: 0, duration: 2, opacity: 1, y:"-50px",scrollTrigger: ".animations8"});
    gsap.to(".animations8", {delay: 0, duration: 2, opacity: 1, y:"-50px",scrollTrigger: ".animations8"});
    gsap.to(".animations9", {delay: 0, duration: 2, opacity: 1, y:"-50px",scrollTrigger: ".animations8"});
    gsap.to(".animations10", {delay: 0, duration: 2, opacity: 1, y:"-50px",scrollTrigger: ".animations11"});
    gsap.to(".animations11", {delay: 0, duration: 2, opacity: 1, y:"-50px",scrollTrigger: ".animations11"});
    gsap.to(".animations12", {delay: 0, duration: 2, opacity: 1, y:"-50px",scrollTrigger: ".animations11"});
    gsap.to(".animations13", {delay: 0, duration: 2, opacity: 1, y:"50px",scrollTrigger: ".animations14"});
    gsap.to(".animations14", {delay: 0, duration: 2, opacity: 1, y:"50px",scrollTrigger: ".animations14"});
    gsap.to(".animations15", {delay: 0, duration: 2, opacity: 1, y:"50px",scrollTrigger: ".animations14"});
    
}


function pageScroll() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Check if at the end of the page
    if (scrollPosition >= scrollableHeight) {
        clearTimeout(scrolldelay); // Stop the scrolling
        window.scrollTo({
            top: 0
        });
        gsapanimations();
        return; // Exit the function
    }

    window.scrollBy(0, 100);
    scrolldelay = setTimeout(pageScroll, 10);
}

// Usage
pageScroll(); // Call the function
