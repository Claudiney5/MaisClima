let appId = '30c19f4e549b1f59d990ccc77c60dcbc';
let units = 'metric';

function searchWeather(searchTerm) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${appId}&lang=pt_br&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer) {
    let artist = document.getElementById('devArt');

    if (resultFromServer.weather[0].main == 'Clear') {
        document.body.style.backgroundImage = 'url("./assets/clear.jpg")';
        artist.innerHTML = 'Page by Claudiney Martins / Photo by Brett Sayles from Pexels';
    }
    if (resultFromServer.weather[0].main == 'Clouds') {
        document.body.style.backgroundImage = 'url("./assets/cloudy.jpg")';
        artist.innerHTML = 'Page by Claudiney Martins / Photo by Simon Matzinger from Pexels';
    }

    if (resultFromServer.weather[0].main == 'Mist') {
        document.body.style.backgroundImage = 'url("./assets/rain.jpg")';
        artist.innerHTML = 'Page by Claudiney Martins / Photo by João Cabral from Pexels';
    }

    if (resultFromServer.weather[0].main == 'Drizzle' || resultFromServer.weather[0].main == 'Rain') {
        document.body.style.backgroundImage = 'url("./assets/rain.jpg")';
        artist.innerHTML = 'Page by Claudiney Martins / Photo by Kaique Rocha from Pexels';
    }

    if (resultFromServer.weather[0].main == 'Snow') {
        document.body.style.backgroundImage = 'url("./assets/snow.jpg")';
        artist.innerHTML = 'Page by Claudiney Martins / Photo by  Mohan Reddy from Pexels';
    }

    if (resultFromServer.weather[0].main == 'Thunderstorm') {
        document.body.style.backgroundImage = 'url("./assets/storm.jpg")';
        artist.innerHTML = 'Page by Claudiney Martins / Photo by João Cabral from Pexels';
    }

   

    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader')
    let temperatureElement = document.getElementById('temperature');
    let humidityElement = document.getElementById('humidity');
    let windSpeedElement = document.getElementById('windSpeed');
    let cityHeader = document.getElementById('cityHeader');
    let weatherIcon = document.getElementById('documentIconImg');

    weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';

    let resultDescription = resultFromServer.weather[0].description;
    weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);

    temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176';

    windSpeedElement.innerHTML = 'Ventos de ' + Math.floor(resultFromServer.wind.speed)*3.6 + ' km/h';

    cityHeader.innerHTML = resultFromServer.name;

    humidityElement.innerHTML = 'Umidade de ' + resultFromServer.main.humidity + '%';
    
    setPositionWeatherInfo();
}

function setPositionWeatherInfo() {
    let weatherContainer = document.getElementById('weatherContainer');
    let weatherContainerHeight = weatherContainer.clientHeight;
    let weatherContainerWidth = weatherContainer.clientWidth;

    weatherContainer.style.left = `calc(50% - ${weatherContainerWidth/2}px)`;
    weatherContainer.style.top = `calc(50% - ${weatherContainerHeight/1.5}px)`;
    weatherContainer.style.visibility = 'visible';

    devArt.style.visibility = 'visible';
}

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    let searchField = document.getElementById('searchInput');
    searchField.value = '';
    searchField.focus();
    if(searchTerm)
       searchWeather(searchTerm);
})

// rain = Photo by Kaique Rocha from Pexels
// clear = Photo by Brett Sayles from Pexels
// snow = Photo by Mohan Reddy Atalu from Pexels
// cloudy = Photo by Simon Matzinger from Pexels
// storm, mist = Photo by João Cabral from Pexels
// default = Photo by Jiarong Deng from Pexels
