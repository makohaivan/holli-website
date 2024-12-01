
// Hero About
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showNextSlide() {
        // Remove active class from all slides
        slides.forEach((slide) => slide.classList.remove("active"));

        // Add active class to the current slide
        slides[currentSlide].classList.add("active");

        // Move to the next slide
        currentSlide = (currentSlide + 1) % slides.length;
    }

    // Start the slider
    showNextSlide(); // Show the first slide immediately
    setInterval(showNextSlide, 5000); // Change slide every 5 seconds
});
