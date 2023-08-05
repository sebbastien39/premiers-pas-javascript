const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Récupération les éléments de la page web en séléctionnant la class CSS
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
// Récupération de l'élément pour le slider image
const sliderImagesContainer = document.querySelector(".banner-img");
// Récupération de l'élément dot
let bulletPoints = document.querySelector("#dots")
// Récupération élément pour le texte
//let texteSlide = document.querySelectorById("#banner p")
// Ajout écouteur d'événement, eventListener sur paragraphe
let texteSlider = document.querySelector("#banner p")
// Compteur slider
let i = 0

// Ajout écouteur d'événement, eventListener sur flèche droite + fonction
arrow_right.addEventListener("click", () => {
	i++ 
	if(i === slides.length){
		i = 0 
	}
	sliderImagesContainer.src = "./assets/images/slideshow/" + slides[i].image
	texteSlider.innerHTML = slides[i].tagLine
	
})
// Ajout écouteur d'événement, eventListener sur flèche gauche + fonction
arrow_left.addEventListener("click", () => {
    i--
    if(i < 0) {
        i = slides.length - 1
    }
	sliderImagesContainer.src = "./assets/images/slideshow/" + slides[i].image
	texteSlider.innerHTML = slides[i].tagLine
	})







