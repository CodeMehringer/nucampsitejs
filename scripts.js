console.log('javascript connected!');
    
const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 5000,
    pause: false
})


//pause button action when clicked on carousel
const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function() {
    //the if else statements were added here when the play button was removed. 
    if (faIcon.classList.contains('fa-pause')){
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    }else{
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
    //no longer pausing the carousel with the pause/play buttons so this is removed
//    console.log('pausing the carousel');
//    carousel.pause();
})

//play button action when clicked on carousel, cycle through images
const carouselPlay = document.getElementById('carouselPlay');
carouselPlay.addEventListener('click', function() {
    console.log('cycle the carousel');
    carousel.cycle();
})