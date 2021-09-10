import { quoteService } from "../Services/QuoteService.js"
import {ProxyState} from "../AppState.js"

function _drawQuotes(){
    document.getElementById("quote").innerHTML = ProxyState.quotes.QuoteTemplate
}

export  class QuoteController { 
    constructor(){
        ProxyState.on("quotes", _drawQuotes)
        quoteService.getQuote()
    }

    getQuotes(){
        try {
            quoteService.getQuotes()
        } catch (error) {
            
        }
    }
}