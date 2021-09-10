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
  
  }
}
console.log('hi from todo controller')