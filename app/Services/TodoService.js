import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";

const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/"
}) 

class TodoService {

}


console.log('hi from todo service')
export const todoService = new TodoService()