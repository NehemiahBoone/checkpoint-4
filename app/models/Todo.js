export default class Todo {
  constructor({ id, description }) {
    this.id = id;
    this.description = description
  }

  get Template() {
    return `
      <li>${this.description}</li>
    `
  }
}