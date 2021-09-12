export class Weather {
constructor(data){
  this.city = data.name
  this.timzone = data.timezone
  this.clouds = data.clouds
  this.kelvin = data.main.temp
  this.weather = data.weather[1]
  this.weatherDesc = data.weather[0].main
  this.icon = data.weather[0].icon
}




weatherConversion(){
    let temp = ((this.kelvin - 273.15) * 1.8) + 32
    return Math.floor(temp)
  }

celciusCoversion(){
    let cel = (this.kelvin - 273.15)
    return Math.floor(cel)
    
}



// TODO add a toggle for weather conversion

get WeatherTemplate(){
    return /*html*/`
<div class="weather">
<h3 class="text-light">${this.city}</h3>
 <div class = "selectable" onclick = "app.weatherController.Change()">
        <div id = "temp">
<h3 class="text-light " id='f'>${this.weatherConversion()}&deg; F <img class=" img-fluid weatherIcon" src="http://openweathermap.org/img/w/${this.icon}.png" alt=""/></h3>
<h3 class="text-light visually-hidden " id='c'>${this.celciusCoversion()}&deg; C <img class=" img-fluid weatherIcon" src="http://openweathermap.org/img/w/${this.icon}.png" alt=""/></h3>

`
  }
}
{/* <button class="toggleBtn" id="toggleDegrees">${this.weatherConversion()}&deg; ${this.celciusCoversion()}&deg;</button> */}