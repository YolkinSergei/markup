function createElementWithClasses(classList, elementType) {
	let element = document.createElement(elementType || 'div');

	if (Array.isArray(classList) && classList.length > 0) {
		classList.forEach(item => element.classList.add(item));
	}

	return element;
}

function createCelebrityElement(data) {
	// Create Celebrity block
	let itemEl = createElementWithClasses(['item']),
		celebrityInfoEl = createElementWithClasses(['celebrity-info']),
		celebrityMessageEl = createElementWithClasses(['celebrity-message']),
		celebrityInfoTitleEl = createElementWithClasses(['celebrity-info-title'], 'p'),
		celebrityInfoDividerEl = document.createElement('img'),
		celebrityInfoTextEl = createElementWithClasses(['celebrity-info-text'], 'p'),
		celebrityInfoLink = createElementWithClasses(['celebrity-info-link'], 'a');

	celebrityInfoTitleEl.innerText = data.celebrityTitle;
	celebrityInfoDividerEl.setAttribute('src', './images/white-divider.png');
	celebrityInfoTextEl.innerText = data.celebrityText;
	celebrityInfoLink.innerText = 'See all my looks';
	celebrityInfoLink.setAttribute('href', data.celebrityLink);

	celebrityMessageEl.appendChild(celebrityInfoTitleEl);
	celebrityMessageEl.appendChild(celebrityInfoDividerEl);
	celebrityMessageEl.appendChild(celebrityInfoTextEl);
	celebrityMessageEl.appendChild(celebrityInfoLink);

	celebrityInfoEl.appendChild(celebrityMessageEl);

	itemEl.appendChild(celebrityInfoEl);
	
	// Create Designer block
	if (!jQuery.isEmptyObject(data.designer)) {
		let designerEl = createElementWithClasses(['designer']),
			designerInfoEl = createElementWithClasses(['designer-info']),
			imgEl = document.createElement('img'),
			hrEl = document.createElement('hr'),
			titleEl = createElementWithClasses(['designer-title']),
			designerRateEl = createElementWithClasses(['designer-rate']);

		titleEl.innerText = 'Made by ' + data.designer.designerName;
		imgEl.setAttribute('src', data.designer.designerPic);

		for (let i = 0; i < 5; i++) {
			let rateItem = createElementWithClasses(['glyphicon'], 'span');
			
			if (i < data.designer.designerRate) {
				rateItem.classList.add('glyphicon-star');
			} else {
				rateItem.classList.add('glyphicon-star-empty');
			}

			designerRateEl.appendChild(rateItem);
		}

		let parentRhombEl = createElementWithClasses(['parent-rhomb']),
			childRhombEl = createElementWithClasses(['child-rhomb']);

		designerInfoEl.appendChild(imgEl);
		designerInfoEl.appendChild(hrEl);
		designerInfoEl.appendChild(titleEl);
		designerInfoEl.appendChild(designerRateEl);

		parentRhombEl.appendChild(childRhombEl);

		designerEl.appendChild(designerInfoEl);
		designerEl.appendChild(parentRhombEl);

		itemEl.appendChild(designerEl);
	}

	if (!jQuery.isEmptyObject(data.clothes)) {
		let celebrityClothesListEl = createElementWithClasses(['celebrity-clothes-list']);

		for (let i = 0; i < data.clothes.length; i++) {
			let celebrityClothesEl = createElementWithClasses(['celebrity-clothes']),
				celebrityClothesInfoEl = createElementWithClasses(['celebrity-clothes-info']),
				clothesPriceEl = createElementWithClasses(['clothes-price']),
				hrEl = document.createElement('hr'),
				clothesTitleEl = createElementWithClasses(['clothes-title'], 'a'),
				parentRhombEl = createElementWithClasses(['parent-rhomb']),
				childRhombEl = createElementWithClasses(['child-rhomb']);

			clothesPriceEl.innerText = data.clothes[i].price;
			clothesTitleEl.innerText = data.clothes[i].type;
			clothesTitleEl.setAttribute('src', data.clothes[i].link);

			celebrityClothesInfoEl.appendChild(clothesPriceEl);
			celebrityClothesInfoEl.appendChild(hrEl);
			celebrityClothesInfoEl.appendChild(clothesTitleEl);

			parentRhombEl.appendChild(childRhombEl);

			celebrityClothesEl.appendChild(celebrityClothesInfoEl);
			celebrityClothesEl.appendChild(parentRhombEl);

			celebrityClothesListEl.appendChild(celebrityClothesEl);
		}

		itemEl.appendChild(celebrityClothesListEl);
	}

	if (data.celebrityPhoto) {
		let celebrityImageEl = createElementWithClasses(['celebrity-image']),
		image = document.createElement('img');

		image.setAttribute('src', data.celebrityPhoto);
		celebrityImageEl.appendChild(image);

		itemEl.appendChild(celebrityImageEl);
	}

	return itemEl;
}

function createRecStylistElement(data) {
	let itemEl = createElementWithClasses(['item']),
		photoEl = createElementWithClasses(['rec-designer-photo']),
		imgEl = document.createElement('img'),
		infoEl = createElementWithClasses(['rec-designer-info']),
		titleEl = createElementWithClasses(['rec-designer-title']),
		bodyEl = createElementWithClasses(['rec-designer-body']),
		nameEl = createElementWithClasses(['rec-designer-name']),
		contentEl = createElementWithClasses(['rec-designer-content']),
		contentBodyEl = createElementWithClasses(['rec-designer-content-body']),
		linkEl = document.createElement('a'),
		rateHtml = '';

	itemEl.appendChild(photoEl);
	photoEl.appendChild(imgEl);
	imgEl.setAttribute('src', data.photo);

	itemEl.appendChild(infoEl);
	infoEl.appendChild(titleEl);
	titleEl.innerHTML = `<p>Recommended stylists</p><img src="./images/grey-divider.png" alt="">`;
	infoEl.appendChild(bodyEl);
	bodyEl.appendChild(nameEl);
	nameEl.innerText = data.name;
	bodyEl.appendChild(contentEl);

	for (let i = 0; i < 5; i++) {
		rateHtml += `<span class="glyphicon glyphicon-star${i < data.rate ? '' : '-empty'}"></span>`;
	}

	contentEl.innerHTML = `<table><tr><td>Stylist</td></tr><tr><td>Bloger</td><td>${rateHtml}</td></tr></table>`;

	contentEl.appendChild(contentBodyEl);
	contentBodyEl.innerHTML = data.descriptionHTML;
	contentBodyEl.appendChild(linkEl);
	linkEl.setAttribute('href', data.link);
	linkEl.innerText = `Contact with ${data.firstname}`;

	return itemEl;
}

function createLookElement(data, title) {
	let itemEl = createElementWithClasses(['item']),
		lookImgEl = document.createElement('img'),
		detailEl = createElementWithClasses(['detail-look']),
		designerImgEl = document.createElement('img'),
		designerTitleEl = document.createElement('p'),
		designerRateEl = document.createElement('p');

	itemEl.innerHTML = `<p>${title}</p><img class="divider" src="./images/grey-divider.png" alt="">`;
	
	itemEl.appendChild(lookImgEl);
	lookImgEl.setAttribute('src', data.photo);
	
	itemEl.appendChild(detailEl);
	
	detailEl.appendChild(designerImgEl);
	designerImgEl.setAttribute('src', data.designerPhoto);

	detailEl.appendChild(designerTitleEl);
	designerTitleEl.innerText = `Made by ${data.designerName}`;

	for (let i = 0; i < 5; i++) {
		let star = createElementWithClasses(['glyphicon']);

		if (i < data.designerRate) {
			star.classList.add('glyphicon-star');
		} else {
			star.classList.add('glyphicon-star-empty');
		}

		designerRateEl.appendChild(star);
	}

	detailEl.appendChild(designerRateEl);

	return itemEl;
}

function createProductPartnersElements (data) {
	let items = [],
		itemEl = createElementWithClasses(['item', 'active']),
		parentContainer = createElementWithClasses(['parent-container']);

	itemEl.appendChild(parentContainer);

	for (let i = 0; i < data.length; i++) {
		if (!itemEl) {
			itemEl = createElementWithClasses(['item']);
			parentContainer = createElementWithClasses(['parent-container']);

			itemEl.appendChild(parentContainer);
		}

		let productContainer = createElementWithClasses(['product-container']),
			productInfo = createElementWithClasses(['product-info']),
			productImage = createElementWithClasses(['product-image']),
			image = document.createElement('img'),
			productNew = createElementWithClasses(['product-new']),
			productNewChild = createElementWithClasses(['product-new-child']),
			li = document.createElement('li'),
			productPrice = createElementWithClasses(['product-price']),
			productTitle = createElementWithClasses(['product-title']),
			hiddenPanel = createElementWithClasses(['hidden-panel']);

		parentContainer.appendChild(productContainer);
		
		productContainer.appendChild(productInfo);
		
		productInfo.appendChild(productImage);
		productInfo.appendChild(productPrice);
		productInfo.appendChild(productTitle);

		productImage.appendChild(image);
		productImage.appendChild(productNew);
		productNew.appendChild(productNewChild);
		productNewChild.innerHTML = '<p>New</p>';
		image.setAttribute('src', data[i].image);
		productImage.appendChild(li);

		data[i].colors.forEach(item => {
			let ul = document.createElement('ul');

			ul.style.backgroundColor = item;

			li.appendChild(ul);
		});

		productPrice.innerHTML = `<p>${data[i].price}</p>`;
		productTitle.innerHTML = `<p>${data[i].description}</p>`;
		productTitle.appendChild(hiddenPanel);
		hiddenPanel.innerHTML = '<div class="btn-rhomb"><div class="btn-rhomb-child">' + 
			'<i class="glyphicon glyphicon-heart-empty"></i></div></div><div class="btn-rhomb">' +
			'<div class="btn-rhomb-child"><i class="glyphicon glyphicon-shopping-cart"></i></div>' + 
			'</div><div class="btn-rhomb"><div class="btn-rhomb-child">' + 
			'<i class="glyphicon glyphicon-share"></i></div></div>';

		if ( (i+1) % 3 === 0 || (i+1) === data.length ) {
			items.push(itemEl);

			itemEl = null;
			parentContainer = null;
		}
	}

	return items;
}