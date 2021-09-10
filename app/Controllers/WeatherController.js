import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function drawWeather() {
  console.log('Hi from weather controller');
  document.getElementById("weather").innerHTML = ProxyState.weather.WeatherTemplate
}

export class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
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