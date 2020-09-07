export default class Todo {
  constructor({ _id, completed, description }) {
    this.description = description
    this._id = _id
    this.completed = completed
  }

  get Template() {
    return `
      ${this.checkTemplate}
    `
  }

  get checkTemplate() {
    if (!this.completed) {
      return `<li class="text-left"><input class="move-left mx-1" type="checkbox" onclick="app.todoController.toggleTodoStatus('${this._id}')">${this.description} <i class="far fa-trash-alt" onclick="app.todoController.removeTodo('${this._id}')"></i></li>`
    } else {
      return `<li class="text-left"><input class="move-left mx-1" type="checkbox" checked onclick="app.todoController.toggleTodoStatus('${this._id}')"><strike>${this.description}</strike> <i class="far fa-trash-alt" onclick="app.todoController.removeTodo('${this._id}')"></i></li>`
    }
  }
}