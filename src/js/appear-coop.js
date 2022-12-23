const coopItems = document.querySelectorAll('.cooperation__item--hidden');

const coopAppear = (entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			for (let i = 0; i < coopItems.length; i++) {
				setTimeout(() => {
					coopItems[i].classList.remove('cooperation__item--hidden')
				}, i * 500)
			}
			observer.disconnect();
		}
	})
}

const observer = new IntersectionObserver(coopAppear, { threshold: .8 })

observer.observe(document.querySelector('.cooperation__item'));