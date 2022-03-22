import axios from 'axios'

class TodoService {

    

    getAllTodosByUserName(userName) {
     return  axios.get(`http://localhost:8080/users/${userName}/todos` )
    }

    deleteTodoById(userName, id){
     return  axios.delete(`http://localhost:8080/users/${userName}/todos/${id}`);
    }

    getTodoByTodoId(userName, id){
     return  axios.get(`http://localhost:8080/users/${userName}/todos/${id}`);
    }

     updateTodo(userName, id, todo){
     return  axios.put(`http://localhost:8080/users/${userName}/updateTodo/${id}`, todo);
    }

     addTodo(userName,todo){
     return  axios.post(`http://localhost:8080/users/${userName}/addTodo`, todo);
    }

}

export default new TodoService()