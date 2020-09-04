export default class Image {
  constructor(data) {
    this.url = data.data.url
  }

  get Template() {
    return `
      <div style="background-image: url('${this.url}')>
    `
  }
}