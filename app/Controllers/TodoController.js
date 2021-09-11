import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";


function _drawTodos(){ 
  let template = ''
  let newTodo = ProxyState.todos
  newTodo.forEach(t => template += t.Template)
  document.getElementById("todo").innerHTML = template
}

function _TodoCount(){
  // document.getElementById('todo-count').innerHTML = ProxyState.count
  let todocount = ProxyState.todos.filter((t) => t.completed);
  document.getElementById(
    "todo-count"
  ).innerHTML = `${todocount.length} out of ${ProxyState.todos.length}`;
}


export class TodoController {

  constructor() {
    ProxyState.on("todos", _drawTodos)
    todoService.getTodos()
    ProxyState.on('count',_TodoCount)
  }

  getTodos(){
    try {
        todoService.getTodos()
    } catch (error) {
      console.log(error, 'get getTodos() error in todo controller');
    }
  }
addTodo(event) {
  event.preventDefault();

  let form = event.target;
let todo ={
  description: form.title.value
}

  try {
  todoService.addTodo(todo);
  } catch (error) {
        console.log(error, 'get addTodo() error in todo controller');
  }
  form.reset()
}
toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.log(error, 'toggleTodoStatus(todoId) error in todo controller');
    }
  }

  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}


console.log('hi from todo controller')