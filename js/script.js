'use strict';

let mainCarouselElement = document.querySelector('#main-slides');

let mainCarouselData = [
	{
		celebrityPhoto: './images/celebrities/MarkWahlberg.png',
		celebrityTitle: 'Thank you, Mark for using our taxfree4u service!',
		celebrityText: `Here's some items you might like`,
		celebrityColor: '',
		celebrityLink: '',
		designer: {
			designerName: 'Jany',
			designerRate: 3,
			designerPic: './images/designers/jany.png'
		},
		clothes: [{
			type: 'Trousers',
			price: '500 $'
		},{
			type: 'Jackets',
			price: '1370 $'
		},{
			type: 'Shoes',
			price: '900 $'
		},{
			type: 'Shirt',
			price: '230 $'
		}]
	}
];