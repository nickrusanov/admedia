const video = document.querySelector('.video');
const videoPlay = document.querySelector('.about__video');
const modal = document.querySelector('.modal--video');
const closeImgs = document.querySelectorAll('.modal__close-img');

videoPlay.addEventListener('click', () => {
	modal.classList.add('modal--visible');
	video.play();
})

modal.addEventListener('click', e => {
	if (e.target === modal || Array.from(closeImgs).includes(e.target)) {
		modal.classList.remove('modal--visible');
		video.pause();
	}
})

document.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		modal.classList.remove('modal--visible');
		video.pause();
	}
})