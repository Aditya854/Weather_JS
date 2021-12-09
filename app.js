//init storage
const storage = new Storage();

//get stored loc data
const wethrloc = storage.getlocationdata()

//init weather object
const wtr = new Weather(wethrloc.city);

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click',(e) =>{
    const city = document.getElementById('city').value;

    wtr.changelocation(city);
    //set loc in LS
    storage.setlocationdata(city); 
    getWeather();

    //close modal
    $('#locModal').modal('hide');
})

function getWeather(){
    wtr.getWeather()
    .then(results  => {
        console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log(err));
}