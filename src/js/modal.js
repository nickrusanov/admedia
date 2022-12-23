const buttons = document.querySelectorAll('button[data-path]');
const modals = document.querySelectorAll('.modal[data-target]');
const closeImgs = document.querySelectorAll('.modal__close-img');

buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		document
			.querySelector(`.modal[data-target=${btn.dataset.path}]`)
			.classList.add('modal--visible');
	})
})

modals.forEach(modal => {
	modal.addEventListener('click', e => {
		if (e.target === modal || Array.from(closeImgs).includes(e.target)) {
			modal.classList.remove('modal--visible');
		}
	})
})