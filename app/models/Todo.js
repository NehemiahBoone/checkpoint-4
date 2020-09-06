export default class Todo {
  constructor({ _id, completed, description }) {
    this.description = description
    this._id = _id
    this.completed = completed
  }

  get Template() {
    return `
      <li>${this.description} <i class="far fa-trash-alt" onclick="app.todoController.removeTodo('${this._id}')"></i></li>
    `
  }
}