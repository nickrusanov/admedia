if (document.getElementById('about')) {
	const scrollBtn = document.querySelector('.slider__scroll-btn');

	scrollBtn.addEventListener('click', event => {
		event.preventDefault();
		document.querySelector(scrollBtn.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
	})
}