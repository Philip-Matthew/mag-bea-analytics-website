// Loading Screen Animation
window.addEventListener('load', function () {
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.5s ease-out';
    setTimeout(function () {
        loadingScreen.style.display = 'none';
    }, 1000); // Match the timeout with the transition duration
});

// --------------------------------------------------------------------------------------------------------------------------------

// Website Loading lazy animation

document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".scroll-animate");

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

    // Initial check
    handleScrollAnimation();
});

// --------------------------------------------------------------------------------------------------------------------------------

// FAQ section Animation
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click" , () =>{
        faq.classList.toggle("active");
    });
});