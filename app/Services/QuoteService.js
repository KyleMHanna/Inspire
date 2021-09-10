import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";

const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/"
}) 

class QuoteService {
  async getQuote() {
    let res = await api.get ('quotes')
    ProxyState.quotes = new Quote(res.data)
  }
}
console.log('hi from quote service')

export const quoteService = new QuoteService()