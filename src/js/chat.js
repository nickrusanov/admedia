if (document.querySelector('.chat')) {
	const chatOpenBtn = document.querySelector('.chat__btn');
	const chatBox = document.querySelector('.chat__box');
	const chatCloseBtn = document.querySelector('.chat__close');
	const chatSendBtn = document.querySelector('.chat__send-btn');
	const chatInput = document.querySelector('.chat__input');
	const chatContainer = document.querySelector('.chat__container');

	const chatOpen = () => {
		chatOpenBtn.classList.add('chat__btn--hidden');
		chatBox.classList.add('chat__box--visible');
	}

	const chatClose = () => {
		chatOpenBtn.classList.remove('chat__btn--hidden');
		chatBox.classList.remove('chat__box--visible');
	}

	const sendMessage = () => {
		if (chatInput.value) {
			let div = document.createElement('div');
			div.classList.add('chat__message');

			let p = document.createElement('p');
			p.innerHTML = chatInput.value;
			div.appendChild(p);
			chatInput.value = '';

			let time = document.createElement('time');
			let now = new Date();
			time.innerHTML = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
			time.classList.add('chat__time');
			div.appendChild(time);

			chatContainer.appendChild(div);
		}
	}

	chatOpenBtn.addEventListener('click', () => chatOpen())

	chatCloseBtn.addEventListener('click', () => chatClose())

	chatSendBtn.addEventListener('click', () => sendMessage())

	window.addEventListener('keydown', e => {
		switch (e.key) {
			case 'Escape':
				chatClose();
				break;
			case 'Enter':
				sendMessage();
				break;
		}
	})
}