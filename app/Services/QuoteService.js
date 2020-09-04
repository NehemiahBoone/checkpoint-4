import { ProxyState } from "../AppState.js"
import Quote from "../models/Quote.js"
import { api } from "../Services/AxiosService.js"

//TODO create methods to retrieve data and update the State
class QuoteService {
  async getQuote() {
    let res = await api.get('quotes')
    ProxyState.quote = new Quote(res)
    console.log(res)
  }

}

const quoteService = new QuoteService();
export default quoteService;