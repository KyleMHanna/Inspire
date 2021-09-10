import { ImageController } from "./Controllers/ImageController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodoController } from "./Controllers/TodoController.js";

class App {
imageController = new ImageController()
weatherController = new WeatherController()
quoteController = new QuoteController()
todoController = new TodoController()
}

window["app"] = new App();
