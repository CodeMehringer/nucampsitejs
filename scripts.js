console.log('javascript connected!');
    
const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})


//pause button action when clicked on carousel
const carouselPause = document.getElementById('carouselPause');
carouselPause.addEventListener('click', function() {
    console.log('pausing the carousel');
    carousel.pause();
})

//play button action when clicked on carousel, cycle through images
const carouselPlay = document.getElementById('carouselPlay');
carouselPlay.addEventListener('click', function() {
    console.log('cycle the carousel');
    carousel.cycle();
})