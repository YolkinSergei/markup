'use strict';

import celebritiesData from './data/celebrities-data.js';
import recStylistsData from './data/rec-stylists-data.js';
import latestLooksData from './data/latest-looks-data.js';
import bestRatedLooksData from './data/best-rated-looks-data.js';
import productPartnersData from './data/product-partners-data.js';


let videoPlayer = document.querySelector('video'),
	btnPlay = document.querySelector('#btnPlay'),
	timerId = null;

btnPlay.addEventListener('click', onPlayerClickPlay);

for (let i = 0; i < celebritiesData.length; i++) {
	let celebritiesCarouselElement = document.querySelector('#main-slides-inner'),
		item = createCelebrityElement(celebritiesData[i]),
		indicatorsEl = document.querySelector('#main-slides .carousel-indicators'),
		indicator = document.createElement('li'),
		indicatorChild = document.createElement('div');
	
	indicator.setAttribute('data-target', '#main-slides');
	indicator.setAttribute('data-slide-to', `${i}`);
	indicatorChild.classList.add('indicator-inner');
	indicator.appendChild(indicatorChild);

	if (i === 0) {
		indicator.classList.add('active');
		item.classList.add('active');
	}

	celebritiesCarouselElement.appendChild(item);
	indicatorsEl.appendChild(indicator);
}

for (let i = 0; i < recStylistsData.length; i++) {
	let stylistsCarouselElement = document.querySelector('#recommended-stylists-slides-inner'),
		item = createRecStylistElement(recStylistsData[i]);

	if (i == 0) {
		item.classList.add('active');
	}

	stylistsCarouselElement.appendChild(item);
}

for (let i = 0; i < latestLooksData.length; i++) {
	let latestLooksElement = document.querySelector('#latest-looks-slides-inner'),
		item = createLookElement(latestLooksData[i], 'Latest looks');

	if (i == 0) {
		item.classList.add('active');
	}

	latestLooksElement.appendChild(item);
}

for (let i = 0; i < bestRatedLooksData.length; i++) {
	let bestRatedLooksElement = document.querySelector('#best-rated-looks-slides-inner'),
		item = createLookElement(bestRatedLooksData[i], 'Best rated looks');

	if (i == 0) {
		item.classList.add('active');
	}

	bestRatedLooksElement.appendChild(item);
}

let productPartnersElements = createProductPartnersElements(productPartnersData);
if (productPartnersElements.length > 0) {
	let productPartnersCarousel = document.querySelector('#product-partners-slides-inner');

	productPartnersElements.forEach(item => {
		productPartnersCarousel.appendChild(item);
	});
}