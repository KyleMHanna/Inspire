import {ImageController} from "./Controllers/ImageController.js";

class App {
imageController = new ImageController()
}

window["app"] = new App();
