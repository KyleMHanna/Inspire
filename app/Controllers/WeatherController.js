import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function drawWeather() {
  console.log('Hi from weather controller');
  document.getElementById("weather").innerHTML = ProxyState.weather.WeatherTemplate
}

// function _drawTime() {
// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() 
// document.getElementById("time").innerText = _drawTime()
// }

export class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
  }

Change(){
  document.getElementById('f').classList.toggle('visually-hidden')
  document.getElementById('c').classList.toggle('visually-hidden');
}
  getWeather() {
    try {
    weatherService.getWeather()
    }
    catch (error) {
    console.log(error, getWeather(), 'weather CONTROLLER');
    }
  }
}