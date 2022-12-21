const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');

window.addEventListener('scroll', () => {
	if (scrollY > 50) {
		header.classList.add('header--small');
		logo.classList.add('header__logo--small');
	} else {
		header.classList.remove('header--small');
		logo.classList.remove('header__logo--small');
	}
})
