export class Weather {
constructor(data){
  this.city = data.name
  this.timzone = data.timezone
  this.clouds = data.clouds
  this.kelvin = data.main.temp
  this.weather = data.weather[1].main
  this.weatherDesc = data.weather[2].description
  this.icon = data.weather[3].icon
}




weatherConversion(){
    let temp = ((this.kelvin - 273.15) * 1.8) + 32
    return Math.floor(temp)
  }


get WeatherTemplate(){
    return /*html*/`
<div class="weather">
<h3 class="text-dark">${this.city}</h3>
<h3 class="text-dark">${this.weatherConversion()}&deg;</h3>
<img class="bw img-fluid" src="http://openweathermap.org/img/w/${this.icon}.png" alt=""/>
  </div>
`
  }
}