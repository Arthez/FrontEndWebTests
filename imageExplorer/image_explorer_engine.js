/**
 * Created by Arthur on 2016-06-13.
 */

var width = 800;
var animationTime = 1000;
var pauseTime = 2000;
var currentSlide = 1;
var interval;

var $sliderElement = $("#slider");
var $slideContainer = $(".slides", $sliderElement);
var $slides = $(".slide", $slideContainer);//jak cos to slidecontainer na slideElement

function startSliding() {
    setupListeners();
    startSlider();
}

function startSlider() {
    interval = setInterval(animateSlideContainer, pauseTime);
}

function animateSlideContainer() {
    $slideContainer.animate({'margin-left': '-=' + width}, animationTime, resetSliderWhenEndIsReached);
}
function resetSliderWhenEndIsReached() {
    if (++currentSlide == $slides.length) {
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
    }
}
function pauseSlider() {
    clearInterval(interval);
}

function openImageInNewTab() {
    var url = $(this).find('img').attr('src');
    window.open(url);
    console.log(url);
}

function setupListeners() {
    $slideContainer.on('mouseover', pauseSlider);
    $slideContainer.on('mouseleave', startSlider);
    $slides.on('click', openImageInNewTab);
}

//-----------------------
$(document).ready(startSliding());
