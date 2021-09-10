import { ProxyState }  from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Image from "../Models/Image.js";

let url = 'images'

class ImageService {
  async getImages() {
    console.log('Hi from image service')
    let res = await api.get ('images')
    ProxyState.image = new Image(res.data)
  }
}

export const imageService = new ImageService()