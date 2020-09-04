import { ProxyState } from "../AppState.js"
import imageService from "../Services/ImageService.js"
import Image from "../models/Image.js"

function _drawImage() {
  let img = ProxyState.image
  document.getElementById("bgImg").style.backgroundImage = `url('${ProxyState.image}')`
}

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController {
  constructor() {
    ProxyState.on("image", _drawImage)
  }

  getImage() {
    try {
      imageService.getImage()
    } catch (error) {
      console.error(error)
    }
  }
}