import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";

const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/"
}) 

class ImageService {
  async getImages() {
    console.log('Hi from image service')
    let res = await api.get ('images')
    ProxyState.image = new Image(res.data)
  }
}

export const imageService = new ImageService()