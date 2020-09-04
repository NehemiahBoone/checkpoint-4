export default class Image {
  constructor(data) {
    this.url = data.data.large_url
  }

  get Template() {
    return `
      url(${this.url})
    `
  }
}