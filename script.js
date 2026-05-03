const track = document.querySelector('.portfolio__track');
const slides = document.querySelectorAll('.portfolio__slide');
const nextBtn = document.querySelector('.portfolio__arrow--next');
const prevBtn = document.querySelector('.portfolio__arrow--prev');

let index = 0;

function updateSlider() {

    track.style.transform = `translateX(-${index * 100}%)`;

    slides.forEach(slide => {
        slide.classList.remove('portfolio__slide--active');
    });

    slides[index].classList.add('portfolio__slide--active');
}

nextBtn.addEventListener('click', () => {
    index++;

    if (index >= slides.length) {
        index = 0;
    }

    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index--;

    if (index < 0) {
        index = slides.length - 1;
    }

    updateSlider();
});
updateSlider();