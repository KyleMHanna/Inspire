import { imageService } from "../Services/ImageService.js";
import { ProxyState } from "../AppState.js";


function _drawImg() {
  document.body.style.backgroundImage =  `url(${ProxyState.image.largeImgUrl})`;  
}

export class ImageController {
  constructor(){
      ProxyState.on('image', _drawImg)
        this.getImages()
        console.log('hi from image controller');
  }

  getImages (){
    try {
    imageService.getImages()
    } catch (error) {
    console.log(error, 'GETIMG() IMAGE CONTROLLER');
    }
  }
}