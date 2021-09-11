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
<h3 class="text-dark">${this.city}</h3>
<h3 class="text-dark ">${this.weatherConversion()}&deg; F</h3>
<h3 class="text-dark ">${this.celciusCoversion()}&deg; C</h3>
<h3 class="text-dark">Weather Forcast: ${this.weatherDesc}</h3>
<img class=" img-fluid" src="http://openweathermap.org/img/w/${this.icon}.png" alt=""/>
  </div>
`
  }
}
{/* <button class="toggleBtn" id="toggleDegrees">${this.weatherConversion()}&deg; ${this.celciusCoversion()}&deg;</button> */}