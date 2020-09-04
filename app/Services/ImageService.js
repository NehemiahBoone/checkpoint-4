import { ProxyState } from "../AppState.js"
import Image from "../models/Image.js"
import { api } from "../Services/AxiosService.js"

//TODO create methods to retrieve data and save to the State
class ImageService {
  constructor() {
    this.getImage()
  }
  async getImage() {
    let res = await api.get('images')
    ProxyState.image = res.data.url
    console.log(res)
  }
}

const imageService = new ImageService();
export default imageService;