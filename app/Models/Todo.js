export class Todo {
  constructor(data) {
    this.description = data.description;
    this.id = data.todoId
    this.completed = data.completed
  }