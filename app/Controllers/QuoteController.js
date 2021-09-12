import { quoteService } from "../Services/QuoteService.js"
import {ProxyState} from "../AppState.js"

function _drawQuotes(){
    document.getElementById("quote").innerHTML = ProxyState.quotes.QuoteTemplate
}

export  class QuoteController { 
    constructor(){
      console.log('hi from quote controller')
        ProxyState.on("quotes", _drawQuotes)
        quoteService.getQuote()
    }


  Author(){
    document.getElementById('author').classList.toggle('visually-hidden')
  }
    getQuotes(){
        try {
            quoteService.getQuotes()
        } catch (error) {
              console.log(error, 'getQuotes QuoteController')
        }
    }
}