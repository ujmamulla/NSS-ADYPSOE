// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('#adaptive li');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let index = 0;

    function showSlide(i) {
        if (i >= slides.length) index = 0;
        else if (i < 0) index = slides.length - 1;
        else index = i;

        document.querySelector('#adaptive').style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
        showSlide(index + 1);
    }

    function prevSlide() {
        showSlide(index - 1);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Optional: Auto-slide every 3 seconds
    setInterval(nextSlide, 3000);

    showSlide(index); // Initial call
});
