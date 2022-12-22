const buttons = document.querySelectorAll('.btn[data-path]');
const modals = document.querySelectorAll('.modal');
const closeImg = document.querySelector('.modal__close-img');

buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		document
			.querySelector(`.modal[data-target=${btn.dataset.path}]`)
			.classList.add('modal--visible');
	})
})

modals.forEach(modal => {
	modal.addEventListener('click', e => {
		if (e.target === modal || e.target === closeImg) {
			modal.classList.remove('modal--visible');
		}
	})
})