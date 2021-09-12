import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";

const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Kyle/todos"
}) 

class TodoService {

  constructor(){
    this.getTodos()
  }


  async getTodos() {
    let res = await api.get();
    ProxyState.todos = res.data.map(t => new Todo(t))
    ProxyState.count = ProxyState.todos.length
    console.log(ProxyState.count)
  }


  async addTodo(todo) {
    let res = await api.post('',todo);
    ProxyState.todos.push(new Todo(res.data))
    ProxyState.todos = ProxyState.todos
    Swal.fire({
      position: 'top-middle',
      icon: 'success',
      title: 'todo added',
      showConfirmButton: false,
      timer: 2000
    })
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(t => t.id == todoId);

    if(todo.completed){
      todo.completed = false
    } else {
      todo.completed = true
    }

    let res = await api.put(todoId, todo);
    this.getTodos()
  }

  async removeTodo(todoId) {
    let x = confirm("Are you sure you want to delete this Todo?")
        if(x == true)
    await api.delete(todoId)
    this.getTodos()
    // Swal.fire(
    // 'Deleted!',
    // ' ',
    // 'error'
    //   )
}
}





console.log('hi from todo service')
export const todoService = new TodoService()