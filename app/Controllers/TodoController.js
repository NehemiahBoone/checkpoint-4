import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

//TODO Create the draw function
function _drawTodos() {
  let template = ""
  let todos = ProxyState.todos
  todos.forEach(t => template += t.Template)
  document.getElementById("todo").innerHTML = template
  _drawRemainingTodos()
}

function _drawRemainingTodos() {
  let todos = ProxyState.todos
  let count = 0
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i]
    if (todo.completed == false) {
      count++
    }
  }
  document.getElementById("todo-count").innerHTML = count.toString()
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    ProxyState.on("todos", _drawTodos)
    this.getTodos()
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(event) {
    event.preventDefault()
    let form = event.target;
    //TODO build the todo object from the data that comes into this method
    let todo = {
      description: form.todo.value,
    }
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
  * This method takes in an id of the Todo that should be togggled as complete
  * @param {string} todoId 
  */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}