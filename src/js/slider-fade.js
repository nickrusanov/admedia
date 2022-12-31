if (document.querySelector('.slider__item')) {
const slides = document.querySelectorAll('.slider__item');
const buttons = document.querySelectorAll('.slider__btn');
let slideId = 0;

const slideChange = (slideIdNew) => {
	slides[slideId].classList.remove('slider__item--active');
	buttons[slideId].classList.remove('slider__btn--active');

	slides[slideIdNew].classList.add('slider__item--active');
	buttons[slideIdNew].classList.add('slider__btn--active');

	slideId = slideIdNew;
}

const slideChangeByTime = () => {
	slideChange(slideId + 1 === slides.length ? 0 : slideId + 1);
}

buttons.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		slideChange(index);
		clearTimeout(timerId);
	})
})

const timerId = setInterval(slideChangeByTime, 6000);
}