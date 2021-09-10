import { ImageController } from "./Controllers/ImageController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { QuoteController } from "./Controllers/QuoteController.js";

class App {
imageController = new ImageController()
weatherController = new WeatherController()
quoteController = new QuoteController()
}

window["app"] = new App();
