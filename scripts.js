const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
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

//play button action when clicked on carousel, cycle through images FIX THIS CODE 
//const carouselPlay = document.getElementById('carouselPlay');
//carouselPlay.addEventListener('click', function() {
//    console.log('cycle the carousel');
//    carousel.cycle();
//})

async function fetchWeather() {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    let city = "breckenridge";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        displayWeather(data);
        } catch(error) {
            console.error("An unexpected error occured", error);
        }
        
    }
    fetchWeather();
    
    function displayWeather(json) {
        let weatherImg = document.createElement('img');
        weatherImg.src = `https://openweathermap.org/img/w/${json.weather[0].icon}.png`;
        document.getElementById('weather-icon').appendChild(weatherImg);

        let temp = document.createElement('h4');
        temp.textContent = `${json.main.temp} \u00B0"|  Feels like: ${json.main.feels_like}`;
        document.getElementById('weather-temp').appendChild(temp);


        let description = document.createElement('h4');
        description.textContent = json.weather[0].description;
        document.getElementById('weather-description').appendChild(description);
    
    }
