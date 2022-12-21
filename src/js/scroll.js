const scrollBtn = document.querySelector('.slider__scroll-btn');
const about = document.getElementById('about');

scrollBtn.addEventListener('click', () => {
	about.scrollIntoView({ behavior: 'smooth' });
})