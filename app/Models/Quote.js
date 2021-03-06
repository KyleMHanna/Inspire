export class Quote {
  constructor(data){
  this.tags = data.tags[0]
  this.content = data.content
  this.author = data.author
  }

    get QuoteTemplate() {
        return /*html*/`
      <div class="quote">
                <p class="text-light">"${this.content}"</p>
                <p id="author" class="visually-hidden">-${this.author} </p>
        </div>
        
        `
      }
}
                // <p class=" text-light">${this.tags}</p>