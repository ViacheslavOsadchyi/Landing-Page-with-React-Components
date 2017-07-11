import React from 'react';
import ReactDOM from 'react-dom';

import SliderApp from '../containers/SliderApp';
import BannerApp from '../containers/BannerApp';
import main from '../css/main.css';

let sliderNodes = document.querySelectorAll('.slider'),
	slides = [
		{
			title: 		'Guillermo - Life & Business Coaching WordPress Theme',
			desc: 		'Check out Monstroid, the number 1 TemplateMonster’s WordPress theme' + 
						' from over 2000 themes. Monstroid has been used to create more than 5000' + 
						' websites, and help hundreds of people launch their businesses online,' + 
						' so join the ranks of happy Monstroid owners!',
			img: 		'/assets/screenshots/slide-1.png',
			extraClass: 'guillermo'
		},
		{
			title: 	'Jedi - MAY THE JOOMLA BE WITH YOU',
			desc: 	'Want to run a store, business site, portfolio or a blog' + 
					' – just purchase Jedi and check out how easy it is. No other' + 
					' theme on the market offers this much functionality in one pack.',
			img: 	'/assets/screenshots/slide-2.png'
		},
		{
			title: 	'Woostroid',
			desc: 	'Designed to be 2017’s ultimate ecommerce theme, Woostroid has both' + 
					' looks and functionality which together will double the efficiency' + 
					' of your e-store!',
			img: 	'/assets/screenshots/slide-3.png'
		},
	],
	bannerNodes = document.querySelectorAll('.prlxBanner');

Array.prototype.forEach.call(sliderNodes, (el)=>{
	ReactDOM.render(<SliderApp slides={slides} />, el);
})

Array.prototype.forEach.call(bannerNodes, (el)=>{
	const {
		title,
		description
	} = el.dataset;
	ReactDOM.render(<BannerApp title={title} description={description} />, el, ()=>{
		el.removeAttribute('data-title');
		el.removeAttribute('data-description');
	});
})


