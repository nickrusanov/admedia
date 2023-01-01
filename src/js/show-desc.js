if (document.querySelector('.section-icons__desc-wrapper')) {
	const sectionIcons = document.querySelector('.section-icons');
	const iconButtons = document.querySelectorAll('.section-icons__desc-btn');
	const iconDescWrapper = document.querySelector('.section-icons__desc-wrapper');
	const iconDescs = document.querySelectorAll('.section-icons__desc');
	const iconItems = document.querySelectorAll('.section-icons__item--narrow');

	let boxId = 0;
	let descClosed = true;

	const closeBox = () => {
		iconDescWrapper.classList.remove('section-icons__desc-wrapper--open');
		iconDescs[boxId].classList.add('section-icons__desc--hidden');

		iconItems.forEach((item, index) => {
			if (index !== boxId) {
				item.classList.remove('section-icons__item--inactive')
			}
		})

		iconDescWrapper.style.height = '0px';
		descClosed = true;
	}

	const changeBox = (boxIdNew) => {
		if (descClosed) {
			iconDescWrapper.classList.add('section-icons__desc-wrapper--open')
			iconItems.forEach((item, index) => {
				index === boxIdNew
					? item.classList.remove('section-icons__item--inactive')
					: item.classList.add('section-icons__item--inactive')
			})
			descClosed = false;
		} else {
			iconItems[boxId].classList.add('section-icons__item--inactive');
			iconItems[boxIdNew].classList.remove('section-icons__item--inactive');
		}

		iconDescs[boxId].classList.add('section-icons__desc--hidden');
		iconDescs[boxIdNew].classList.remove('section-icons__desc--hidden');

		iconDescWrapper.style.height = iconDescs[boxIdNew].offsetHeight + 10 + 'px';

		boxId = boxIdNew;
	}

	iconButtons.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			if (window.innerWidth < 768) {
				return;
			}
			
			if (boxId === index && !descClosed) {
				closeBox();
			} else {
				changeBox(index);
			}
		})
	})

	window.addEventListener(`resize`, () => {
		if (!descClosed) {
			iconDescWrapper.style.height = iconDescs[boxId].offsetHeight + 10 + 'px';
		}
	});
}