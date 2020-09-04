import { ProxyState } from "../AppState.js"
import imageService from "../Services/ImageService.js"
import Image from "../models/Image.js"

function _drawImage() {
  let image = ProxyState.image
  document.getElementById("bgImg").innerHTML = image.Template
}

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController {
  constructor() {
    ProxyState.on("image", _drawImage)
  }
}