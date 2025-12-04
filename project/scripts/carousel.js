let slideCarousel = 0;
const slides = document.querySelectorAll(".slide section");
const slideContainer = document.querySelector(".slide");

function showSlide(n) {
    if (window.innerWidth >= 1280) {
        slideCarousel = n;
        slideContainer.style.transform = `translateX(-${n * 100}%)`;
    }
    else {
        slideContainer.style.transform = 'none';
    }
}

function enableCarousel() {
    if (window.innerWidth >= 1280 && slides.length > 1) {
        showSlide(slideCarousel);
        return true;
    }
    return false;
}

document.querySelector(".next").addEventListener("click", () => {
    if (!enableCarousel()) return;
    slideCarousel = (slideCarousel + 1) % slides.length;
    showSlide(slideCarousel);
});

document.querySelector(".back").addEventListener("click", () => {
    if (!enableCarousel()) return;
    slideCarousel = (slideCarousel - 1 + slides.length) % slides.length;
    showSlide(slideCarousel);
});

window.addEventListener("resize", () => {
    showSlide(slideCarousel);
});

showSlide(0);