if (document.querySelector('.section-icons__item--hidden')) {
	const hiddenItems = document.querySelectorAll('.section-icons__item--hidden');
	let order = 0;

	const appear = (entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				setTimeout(() => {
					entry.target.classList.remove('section-icons__item--hidden');
					order = 0;
				}, order++ * 500);
			}
		})
	}

	const observer = new IntersectionObserver(appear, { threshold: 0.8 });

	hiddenItems.forEach(item => {
		observer.observe(item);
	})
}