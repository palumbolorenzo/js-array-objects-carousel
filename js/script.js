/*

Consegna:
Riprendiamo l'esercizio carosello e modifichiamone il codice per renderlo funzionante con un array di oggetti al posto dell'array semplice.
Ecco l'array con i dati:
const images = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];
BONUS 1:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 2:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

*/

/*
const arrImages = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];
*/

const arrImages = [
	'img/01.webp',
	'img/02.webp',
	'img/03.webp',
	'img/04.webp',
	'img/05.webp'
];

/*
const arrImgOne = [], arrImgTwo = [], arrImgThree = [], arrImgFour = [], arrImgFive = [];
for (let i = 0; i < arrImages.length; i++) {
	const objImages = arrImages[i];
	if (objImages.image === 'img/01.webp' && objImages.title === "Marvel's Spiderman Miles Morale" && objImages.text === "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.") {
		arrImgOne.push(objImages);
	} else if (objImages.image === 'img/02.webp' && objImages.title === "Ratchet & Clank: Rift Apart" && objImages.text === "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality."){
		arrImgTwo.push(objImages);
	} else if (objImages.image === 'img/03.webp' && objImages.title ==="Fortnite" && objImages.text === "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.") {
		arrImgThree.push(objImages);
	} else if (objImages.image === 'img/04.webp' && objImages.title === "Stray" && objImages.text === "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city") {
		arrImgFour.push(objImages);
	} else //(objImages.image === 'img/05.webp' && objImages.title === "Marvel's Avengers" && objImages.text === "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.") 
	{
		arrImgFive.push(objImages);
	}
}
*/

const eleSliderViewer = document.querySelector('.slider-viewer');
const eleSliderThumbs = document.querySelector('.thumbs');
const eleBtnLeft = document.querySelector('.btn-left');
const eleBtnRight = document.querySelector('.btn-right');

for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');
	if (i === 0) {
		eleImg.classList.add('active');
	}
	eleSliderViewer.append(eleImg);

	const eleThumb = document.createElement('img');
	eleThumb.src = arrImages[i];
	eleThumb.classList.add('thumb-img');
	if (i === 0) {
		eleThumb.classList.add('active');
	}
	eleSliderThumbs.append(eleThumb);
}

const listEleImg = document.querySelectorAll('.slider-img'); 
const listThumbs = document.querySelectorAll('.thumb-img');


let activeIndex = 0;

eleBtnRight.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	eleBtnRight.classList.remove('hidden');
	if (activeIndex === listEleImg.length - 1) {
		activeIndex = 0;
	} else {
		activeIndex++;
	}

	listEleImg[activeIndex].classList.add('active');
});

eleBtnLeft.addEventListener('click', function () {
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	eleBtnRight.classList.remove('hidden');
	if (activeIndex === 0) {
		activeIndex = listEleImg.length - 1;
	} else {
		activeIndex--;
	}

	listEleImg[activeIndex].classList.add('active');
});
