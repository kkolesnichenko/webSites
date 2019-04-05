function openNav() {
    var menu = document.getElementById('navLinks');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

var button=document.getElementsByClassName('loadMore');
button.onclick=function(){
    var openHblock=document.getElementById('hiddenClass');
    if(openHblock.style.display !=='none'){
        openHblock.style.display ='none';
    }else{
         openHblock.style.display ='block';
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlider(a) {
    showSlides(slideIndex += a);
}

function currentSlide(a) {
    showSlides(slideIndex = a);
}

function showSlides(a) {
    var slides = document.getElementsByClassName('quote');
    if (a > slides.length) {
        slideIndex = 1;
    }
    if (a < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

 
