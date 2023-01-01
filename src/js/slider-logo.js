if (document.querySelector('.brands__slider')) {

	let logos = Array.from(document.querySelectorAll('.brands__slider-img'));
	const logoBox = document.querySelector('.brands__slider');
	const prev = document.getElementById('prevBrand');
	const next = document.getElementById('nextBrand');

	let logoSrcArray = new Array();
	let logoQty;
	let logoGap;
	let logoShift = -1;

	const logoQtyChange = () => {
		if (window.innerWidth >= 992) {
			Math.floor(logoBox.offsetWidth / 180) > 6
				? logoQty = 6
				: logoQty = Math.floor(logoBox.offsetWidth / 180);

			logoGap = (logoBox.offsetWidth - logoQty * 160) / (logoQty - 1);
		} else {
			Math.floor(logoBox.offsetWidth / 120) > 6
				? logoQty = 6
				: logoQty = Math.floor(logoBox.offsetWidth / 120);

			logoGap = (logoBox.offsetWidth - logoQty * 100) / (logoQty - 1);
		}
	}

	const logoChangePosition = () => {
		logos.forEach((logo, i) => {
			if (window.innerWidth >= 992) {
				logo.style.left = (logoShift + i) * (160 + logoGap) + 'px';
			} else {
				logo.style.left = (logoShift + i) * (100 + logoGap) + 'px';
			}
		})
	}

	const logoNext = () => {
		let logoTemp = logos[0];
		logos[0].remove();
		logos.shift();

		logos.push(logoTemp);
		logoBox.appendChild(logoTemp);

		logoChangePosition();
	}

	const logoPrev = () => {
		let logoTemp = logos[logos.length - 1];
		logos[logos.length - 1].remove();
		logos.pop();

		logos.unshift(logoTemp);
		logoBox.appendChild(logoTemp);

		logoChangePosition();
	}

	const logoInit = () => {
		logos.forEach((item, i) => {
			logoSrcArray[i] = item.src;
		})

		logoQtyChange();

		logoChangePosition();
	}

	logoInit();

	next.addEventListener('click', () => {
		logoNext();
	})

	prev.addEventListener('click', () => {
		logoPrev();
	})

	window.addEventListener('resize', () => {
		logoQtyChange();

		logoChangePosition();
	})

	let x1;

	logoBox.addEventListener('mousedown', event => {
		x1 = event.x;
		logoBox.classList.add('brands__slider--grabbing');
	})

	logoBox.addEventListener('mouseup', event => {
		if (Math.abs(event.x - x1) > 10) {
			event.x > x1 ? logoPrev() : logoNext();
		}

		logoBox.classList.remove('brands__slider--grabbing');
	});
}