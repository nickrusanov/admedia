if (document.querySelector('.feedback')) {
	const citesBox = document.querySelector('.feedback__content-list');
	const cites = document.querySelectorAll('.feedback__content-item');
	const prevBtn = document.getElementById('prevCite');
	const nextBtn = document.getElementById('nextCite');

	let citeIdCurrent = 0;
	let timerIdCite = setInterval(() => nextCite(), 6000);
	let resetOff = true;

	const addMargin = () => {
		let maxHeight = 0;

		cites.forEach(cite => {
			cite.offsetHeight > maxHeight ? maxHeight = cite.offsetHeight : maxHeight
		})

		citesBox.style.height = maxHeight + 'px';
	}

	const nextCite = () => {
		cites[citeIdCurrent].classList.remove('feedback__content-item--visible');

		++citeIdCurrent === cites.length ? citeIdCurrent = 0 : citeIdCurrent;
		cites[citeIdCurrent].classList.add('feedback__content-item--visible');
	}

	const prevCite = () => {
		cites[citeIdCurrent].classList.remove('feedback__content-item--visible');

		--citeIdCurrent === -1 ? citeIdCurrent = cites.length - 1 : citeIdCurrent;
		cites[citeIdCurrent].classList.add('feedback__content-item--visible');
	}

	const setCiteInterval = () => {
		timerIdCite = setInterval(() => nextCite(), 6000);
		setTimeout(() => resetOff = true, 14000);
	}

	const resetCiteInterval = () => {
		if (resetOff) {
			clearInterval(timerIdCite);
			setTimeout(setCiteInterval, 14000);
			resetOff = false;
		}
	}

	addMargin();

	prevBtn.addEventListener('click', () => {
		prevCite();
		resetCiteInterval();
	});

	nextBtn.addEventListener('click', () => {
		nextCite();
		resetCiteInterval();
	});

	citesBox.addEventListener('click', () => {
		resetCiteInterval();
	})

	window.addEventListener('resize', () => addMargin());
}