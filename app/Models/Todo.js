export class Todo {
  constructor(data) {
    this.description = data.description;
    // this.title = data.title
    this.id = data._id
    this.completed = data.completed 
    // this.checked = data.checked || false
  }
  get Template(){
    if(this.completed){
    return /*html*/ `
    <div class="container-fluid">
    <div class="row text center">
      <div class="col-md-4 text-center"> </div>

      <div class="col-md-4 todoCARD text-center card  shadow-lg ">
      <div class=" completedBG shadow-lg rounded  mb-4">
          <label class="completed"> ${this.description} <i class="mdi mdi-check text-light"> </i> </label>    
      </div>
        <button class="btn text-light "><i class="mdi mdi-check " onclick="app.todoController.toggleTodoStatus('${this.id}')"></i></button>
        <button class="btn text-light "><i class="mdi mdi-delete-forever " onclick="app.todoController.removeTodo('${this.id}')"></i></button>

          <div class="col-md-4 text-center"> </div>
    </div>
    </div>
    </div>
    `
  }
else {
      return /*html*/`
  <div class="container-fluid">
    <div class="row text center">
      <div class="col-md-4 text-center"> </div>

      <div class="col-md-4 text-center card shadow-lg todoCARD">
      <div class="card todoCARD uncompletedBG shadow-lg  mb-4">
          <label class=""> </i> ${this.description}</label>    
      </div>
        <button class="btn btn-outline-success "><i class="mdi mdi-check" onclick="app.todoController.toggleTodoStatus('${this.id}')"></i></button>
        <button class="btn btn-outline-danger"><i class="mdi mdi-delete-forever" onclick="app.todoController.removeTodo('${this.id}')"></i></button>
    
      <div class="col-md-4 text-center"> </div>

    </div>
    </div>
    </div>
    `
    }
  }
}
  

    //   <div class="row shadow-lg rounded ">
    //   <div class="todos">
    //   </div>
    //   <div class="col shadow-lg rounded p-3 text-light">
    // <p  class="${this.taskId}" onclick="app.todosController.completeTodo('${this.id}')">${this.title} <input type="checkbox" value="" ${this.checked ? "checked" : ""} >  </p>
    
    // </div>
    // <div class="col-1 shadow-lg rounded p-3">
    // <button class="text-danger close" onclick="app.todosController.deleteTodo('${this.id}')"><i class="mdi mdi-delete"></i></button>
    // </div>
    // </div>