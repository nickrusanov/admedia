if (document.querySelector('.modal[data-target="feedback"]')) {
	const modal = document.querySelector('.modal[data-target="feedback"]');
	const gradeBox = document.querySelector('.modal__grade');
	const gradeBtns = document.querySelectorAll('.modal__grade-btn');

	let starQtyActive = -1;

	const addStar = (starQty) => {
		gradeBtns.forEach((btn, index) => {
			if (index <= starQty) {
				btn.classList.add('modal__grade-btn--active');
			} else {
				btn.classList.remove('modal__grade-btn--active');
			}
		})
	}

	gradeBtns.forEach((btn, index) => {
		btn.addEventListener('click', () => starQtyActive = index)
		btn.addEventListener('mouseover', () => addStar(index))
	})

	modal.addEventListener('mouseover', event => {
		if (!gradeBox.contains(event.target)) {
			addStar(starQtyActive);
		}
	})
}