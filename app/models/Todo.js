export default class Todo {
  constructor({ id, description, completed }) {
    this.id = id;
    this.description = description
    this.completed = completed
  }

  get Template() {
    return `
      <li>${this.description}</li>
    `
  }
}