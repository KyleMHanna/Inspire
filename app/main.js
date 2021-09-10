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

// function currentTime() {
//   var date = new Date(); 
//   var hour = date.getHours();
//   var min = date.getMinutes();
//   var sec = date.getSeconds();
//   hour = updateTime(hour);
//   min = updateTime(min);
//   sec = updateTime(sec);
//   document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; 
//     var t = setTimeout(function(){ currentTime() }, 1000); 
// }

// function updateTime(k) {
//   if (k < 10) {
//     return "0" + k;
//   }
//   else {
//     return k;
//   }
// }

// currentTime();
