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
//let bulletPoints = document.getElementById("#dots")
// Récupération élément pour le texte
//let texteSlide = document.querySelectorById("#banner p")
//console.log(dot)


// Ajout écouteur d'événement, eventListener sur paragraphe
let texteSlider = document.querySelector("#banner p")



// Compteur slider

i = 1



//	texteSlides.innerHTML = slides[i].tagLine


// Ajout écouteur d'événement, eventListener sur flèche gauche
arrow_left.addEventListener("click", () => {
		sliderImagesContainer.src = "./assets/images/slideshow/"+ slides[i].image
		i--
		if(i < 0)  {
			i = 0
		}	
		//texteSlider.innerHTML = slides[i].tagLine;
		
})

// Ajout écouteur d'événement, eventListener sur flèche droite
arrow_right.addEventListener("click", () => {
	sliderImagesContainer.src = "./assets/images/slideshow/"+ slides[i].image

	i++ 
	if(i === slides.length){
		i = 0
	}
	//texteSlider.innerHTML = slides[i].tagLine
	
	
})






