class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-min-temp');
        this.wind = document.getElementById('w-wind');
    }


paint(wether){
    this.location.textContent = wether.name;
    this.desc.textContent = wether.weather[0].description;
    this.string.textContent = wether.main.temp;
    this.icon.setAttribute('src', "https://openweathermap.org/img/wn/" + wether.weather[0].icon + ".png");
    this.humidity.textContent = `Relative Humidity: ${wether.main.humidity}`;
    this.feelslike.textContent = `Feels Like: ${wether.main.feels_like}`;
    this.wind.textContent = `Wind: ${wether.wind.speed}`;
    this.dewpoint.textContent = `DewPoint: ${wether.main.temp_min}`
}
}