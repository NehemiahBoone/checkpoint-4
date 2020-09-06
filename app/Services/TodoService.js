import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../models/Todo.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'Nehemiah/todos/'


class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    //TODO Handle this response from the server
    ProxyState.todos = res.data.data.map(t => new Todo(t))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    //TODO Handle this response from the server
    let newTodo = new Todo(todo)
    ProxyState.todos = [...ProxyState.todos, newTodo]
  }

  async toggleTodoStatus(todoId) {
    let todo = ProxyState.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    if (todo.completed) {
      todo.completed = false
    } else {
      todo.completed = true
    }
    let res = await api.put(url + todoId, todo)
    ProxyState.todos = ProxyState.todos
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    await api.delete(url + todoId)
    let index = ProxyState.todos.findIndex(t => t._id == todoId)
    ProxyState.todos.splice(index, 1)
    ProxyState.todos = ProxyState.todos
    this.getTodos()
  }
}

const todoService = new TodoService();
export default todoService;