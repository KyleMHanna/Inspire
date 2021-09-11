import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";


function _drawTodos(){ 
  let template = ''
  let newTodo = ProxyState.todos
  newTodo.forEach(t => template += t.Template)
  document.getElementById("todo").innerHTML = template
}



export class TodoController {

  constructor() {
    ProxyState.on("todos", _drawTodos)
    todoService.getTodos()
  }

  getTodos(){
    try {
        todoService.getTodos()
    } catch (error) {
      console.log(error, 'get getTodos() error in controller');
    }
  }
addTodo() {


  try {
  todoService.addTodo(todo);
  } catch (error) {
        console.log(error, 'get addTodo() error in controller');
  }
}
}


console.log('hi from todo controller')