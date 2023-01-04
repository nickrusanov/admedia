// HEADER RESIZE

const header = document.querySelector('.header');
const headerInner = document.querySelector('.header__inner');
const logo = document.querySelector('.header__logo');
const hamburgerBtn = document.querySelector('.header__hamburger');

const headerResize = () => {
	if (scrollY > 50) {
		header.classList.add('header--small');
		headerInner.classList.add('header__inner--small');
		logo.classList.add('header__logo--small');
		hamburgerBtn.classList.add('header__hamburger--small');
	} else {
		header.classList.remove('header--small');
		headerInner.classList.remove('header__inner--small');
		logo.classList.remove('header__logo--small');
		hamburgerBtn.classList.remove('header__hamburger--small');
	}
}

window.addEventListener('scroll', () => {
	headerResize();
	chatOpenBtnHide();
});

// HEADER HAMBURGER

const menu = document.querySelector('.menu');
const body = document.querySelector('body');

const menuToggle = () => {
	menu.classList.toggle('menu--open');
	header.classList.toggle('header--open');
	headerInner.classList.toggle('header__inner--open');
	body.classList.toggle('pin');
}

const menuClose = () => {
	menu.classList.remove('menu--open');
	header.classList.remove('header--open');
	headerInner.classList.remove('header__inner--open');
	body.classList.remove('pin');
}

hamburgerBtn.addEventListener('click', menuToggle);

window.addEventListener('orientationchange', menuClose);

window.addEventListener('resize', () => {
	window.innerWidth < 768 
	? menu.classList.add('menu--anim')
	: menu.classList.remove('menu--anim')
})

// HEADER NAVIGATION

if (document.querySelector('a[href^="#"]')) {
	const links = document.querySelectorAll('a[href^="#"]');

	links.forEach(link => {
		link.addEventListener('click', event => {
			if (window.innerWidth > 768 || !link.classList.contains('menu__btn')) {
				event.preventDefault();
				document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
			} else {
				menuToggle();
			}
		})
	})
}