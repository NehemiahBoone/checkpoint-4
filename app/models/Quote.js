export default class Quote {
  constructor(data) {
    this.quote = data.data.quote.body
    this.author = data.data.quote.author
  }

  get Template() {
    return `
      <h5>${this.quote}</h5>
      <h5${this.author}</h5>
    `
  }
}