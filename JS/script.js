let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => currentSlide(-1));

document.querySelector('.next-button').addEventListener('click', () => currentSlide(1));

function currentSlide(d) {
    const sliderContainer = document.querySelector('.slider-container');
    const totalImages = document.querySelectorAll('.slider-item').length;
    currentIndex = (currentIndex + d + totalImages) % totalImages;
    const offset = -currentIndex * 100;

    // Hide the current slide and show the next/previous one
    sliderContainer.style.transform = 'translateX(' + offset + '%)';
}

// AUTOPLAY
let intervalId = setInterval(() => {
    if (!document.hidden) {
        currentSlide(1);
    }
}, 4000);

// STOP AUTOPLAY ON MOUSE OVER
document.querySelector('.slider-container').addEventListener('mouseover', () => clearInterval(intervalId));

// RESUME AUTOPLAY ON MOUSE OUT
document.querySelector('.slider-container').addEventListener('mouseout', () => intervalId = setInterval(() => {
    if (!document.hidden) {
        currentSlide(1);
    }
}, 4000));