import { useState, useEffect } from "react"
import AuthenticationService from "./AuthenticationService"
import TodoService from "../../api/todo/TodoService";
import {FaTimes  } from 'react-icons/fa'
import {BsPencilSquare} from 'react-icons/bs'


const ListTodoComponents = (props) => {
  const [todoList, setToDoList] = useState([]);
  const [message, setMessage] = useState(null);
    useEffect(() => {
        refreshTodos()
   }, [])

   const refreshTodos = () => {
     
         let userName =  AuthenticationService.getLoggedInUserName()
     TodoService.getAllTodosByUserName(userName)
     .then(response=> {
           setToDoList(response.data)
       })
   }

    const deleteTodo =  (id) => {
     let userName =  AuthenticationService.getLoggedInUserName()
       TodoService.deleteTodoById(userName, id)
     .then(response=> {
            setMessage(`Delete of todo ${id} is successfull`);
           refreshTodos()
       })

   }



   const updateTodo =  (id) => {
     console.log(props)
     props.navigate(`/todos/${id}`);
   }


   const addTodoClicked = () => {
    props.navigate(`/todos/-1`);

   }

    return (
        <div> 
        <h1> List Todos </h1>
      { message != null && <div className = "alert alert-success"> {message} </div> }
        <div className = "container">
        <table className = "table">
          <thead> 
             <tr>
            <th> Id </th>
            <th> Description </th>
            <th> Is Completed </th>
            <th> Target date </th>
             <th> Action </th>
             </tr>
          </thead>
          <tbody>
         { 
         todoList.map(element => {
             console.log(element)
             return (<tr key =  {element.id}>
              <td> {element.id} </td>
              <td> {element.description} </td>  
               <td> {element.done.toString()} </td>  
                <td> {element.targetDate.toString().split("T")[0]} </td>  
                {/* <td> <FaTimes style = {{color: "red", cursor: "pointer"}} onClick = {console.log("onclick")}  /> */}
                <td> <FaTimes  style = {{color: "red", cursor: "pointer"}} onClick = {() => deleteTodo(element.id) } />   <BsPencilSquare style = {{color: "grey", cursor: "pointer"}}  onClick = {() => updateTodo(element.id) } ></BsPencilSquare></td>
                <td>   </td>  
            </tr>)
           }) 
          }
         </tbody>
           </table>
           <div className = "row">
             <button className = "btn btn-success" onClick = {addTodoClicked}>  Add </button>
             </div>
              </div>
         </div>
    )
}


export default ListTodoComponents