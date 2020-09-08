export default class Quote {
  constructor(data) {
    this.quote = data.data.quote.body
    this.author = data.data.quote.author
  }

  get Template() {
    return `
      <p class="text-light" data-toggle="tooltip" data-placement="right" title="${this.author}">${this.quote}</p>
    `
  }
}