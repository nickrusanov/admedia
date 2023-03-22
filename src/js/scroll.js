

if (document.getElementById('about')) {

	// SCROLL BUTTON

	const scrollBtn = document.querySelector('.slider__scroll-btn');

	scrollBtn.addEventListener('click', event => {
		event.preventDefault();
		document.querySelector(scrollBtn.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
	})


	// POINT CHANGE

	let pointCurrent;

	const pointChange = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				document.querySelectorAll('.menu__btn').forEach((el, i) => {
					if (i === pointCurrent) {
						el.classList.remove('menu__btn--active');
					}
				})

				if (entry.target.id !== 'slider') {
					document.querySelector(`.menu__btn[href="${'#' + entry.target.id}"]`).classList.add('menu__btn--active');
				}

				document.querySelectorAll('.menu__btn').forEach((el, i) => {
					if (entry.target.id !== 'slider' && el.getAttribute('href') === '#' + entry.target.id) {
						pointCurrent = i;
					}
				})
			}
		})
	}

	const scrollObserver = new IntersectionObserver(pointChange, { threshold: 0.5 });

	document.querySelectorAll('section[id]').forEach((section) => {
		scrollObserver.observe(section);
	})
}
