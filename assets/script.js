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


// Récupérer les éléments de la page web en séléctionnant la class CSS
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

// Séléction de l'élément pour le slider image
const sliderImagesContainer = document.querySelector(".banner-img");


// eventListener sur flèche gauche
arrow_left.addEventListener("click", () => {
	for (var i = 0; i < slides.length; i++) {
		
		//console.log(slides[i]);
		//sliderImagesContainer.src = "./assets/images/slideshow/"`${slides[i]}`
		sliderImagesContainer.src = "./assets/images/slideshow/"+ slides[i].image
	  }
})

// eventListener sur flèche droite
arrow_right.addEventListener("click", () => {
	sliderImagesContainer.src = "./assets/images/slideshow/" + slides[1].image

})



// Génération du code
//sliderImagesContainer.src = "./assets/images/slideshow/slide3.jpg"

//sliderImages.setAttribute("src", "./assets/images/slidesh" (slides.image))




//selectionner l'éllément ou mettre les image 
// appliquer le nouvel élément ds la html





