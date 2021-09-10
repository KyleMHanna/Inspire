import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";

const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/"
}) 

class WeatherService {
  async getWeather() {
    console.log("Hi from weather service");
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }
}

export const weatherService = new WeatherService();