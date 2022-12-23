const prodItems = document.querySelectorAll('.product__item--hidden');

const prodAppear = (entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			for (let i = 0; i < prodItems.length; i++) {
				setTimeout(() => {
					prodItems[i].classList.remove('product__item--hidden')
				}, i * 500)
			}
			prodObserver.disconnect();
		}
	})
}

const prodObserver = new IntersectionObserver(prodAppear, { threshold: .8 })

prodObserver.observe(document.querySelector('.product__item'));