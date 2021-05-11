
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
	change(n);
    showSlides(slideIndex = n);
}

function change(n){ /* Меняет название слайда и цвет страницы */
	if (n==1) {
		document.getElementById('name').innerHTML = 'Games';
		document.body.style.backgroundColor = "#FF8000";
	}
	if (n==2) {
		document.getElementById('name').innerHTML = 'About Us';
		document.body.style.backgroundColor = "#7FFF00";
		
	}
	if (n==3) {
		document.getElementById('name').innerHTML = 'Contacts';
		document.body.style.backgroundColor = "#FFFF00";
	}
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
