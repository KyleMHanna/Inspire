export class Quote {
  constructor(data){
  this.tags = data.tags[0]
  this.content = data.content
  this.author = data.author
  }

    get QuoteTemplate() {
        return /*html*/`
      <div class="quote">
                <p class="lead text-light">"${this.content}"</p>
                <p class="lead text-light">Author: ${this.author}</p>
                <p class="lead text-light">${this.tags}</p>
        </div>
        
        `
      }
}