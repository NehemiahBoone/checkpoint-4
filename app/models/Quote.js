export default class Quote {
  constructor(data) {
    this.quote = data.data.quote.body
    this.author = data.data.quote.author
  }

  get Template() {
    return `
      <p class="text-light">${this.quote}</p>
      <br>
      <h5 class="text-light">${this.author}</h5>
    `
  }
}