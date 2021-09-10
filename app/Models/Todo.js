export class Todo {
  constructor(data) {
    this.description = data.description;
    this.title = data.title
    this.id = data.todoId
    this.completed = data.completed
    this.checked = data.checked || false
  }
  get todoTemplate(){
    return /*html*/ `
      <div class="row shadow-lg rounded ">
      <div class="todos">
      </div>
      <div class="col shadow-lg rounded p-3 text-light">
    <p  class="${this.taskId}" onclick="app.todosController.completeTodo('${this.id}')">${this.title} <input type="checkbox" value="" ${this.checked ? "checked" : ""} >  </p>
    
    </div>
    <div class="col-1 shadow-lg rounded p-3">
    <button class="text-danger close" onclick="app.todosController.deleteTodo('${this.id}')"><i class="mdi mdi-delete"></i></button>
    </div>
    </div>
    `
  }
}