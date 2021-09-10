import { ImageController } from "./Controllers/ImageController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
imageController = new ImageController()
weatherController = new WeatherController()
}

window["app"] = new App();
