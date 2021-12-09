class Weather{
    constructor(city){
        this.apikey ='1a40a136fadfe459ea2a6cfe68a6d6b0';
        this.city = city;
    }


async getWeather(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.city +'&units=metric&appid='+ this.apikey);
    
    const responsedata = await response.json();

    return responsedata;
}

// change location
    changelocation(city)
    {
        this.city=city;
    }

}
