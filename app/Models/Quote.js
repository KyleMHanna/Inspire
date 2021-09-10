export class Quote {
  constructor(data){
  this.tags = data.tags[0]
  this.content = data.content
  this.author = data.author
  }

    get QuoteTemplate() {
        return /*html*/`
      <div class="quote">
            <blockquote class="blockquote">
                <p class="lead text-light">${this.content}</p>
                <p class="lead text-light">-${this.author}</p>
                <p class="lead text-light">-${this.tags}</p>
            </blockquote>
        </div>
        
        `
      }
}