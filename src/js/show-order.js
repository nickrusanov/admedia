if (document.querySelector('.modal')) {
	const types = document.querySelectorAll('input[name^="type"]');
	const changeItems = document.querySelectorAll('.modal__change-item');
	const price = document.querySelector('.modal__price-text--brand');
	const priceArray = [2500, 4000, 3200];
	const delivery = document.getElementById('delivery');
	const mounting = document.getElementById('mounting');
	let typeIdCurrent = 0;

	const priceChange = () => {
		price.innerHTML =
			priceArray[typeIdCurrent] +
			(delivery.checked ? 500 : 0) +
			(mounting.checked ? 1000 : 0) +
			'&#8381;';
	}

	types.forEach((type, index) => {
		type.addEventListener('change', () => {
			changeItems[index].classList.add('modal__change-item--active');
			changeItems[typeIdCurrent].classList.remove('modal__change-item--active');
			typeIdCurrent = index;
			priceChange();
		})
	})

	delivery.addEventListener('click', () => priceChange());
	mounting.addEventListener('click', () => priceChange());
}