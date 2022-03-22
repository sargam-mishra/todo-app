import { Link } from "react-router-dom"
import TodoService from "../../api/todo/TodoService";
import { useState } from "react";

const WelcomeComponent = (props) => {

    return (
        <div>
        <h1> Welcome!</h1>
        <div className = "container">
      Welcome to {props.params.name}. You can manage your todos <Link to = "/todos"> here </Link> 
         </div>
         </div>


    )


}


export default WelcomeComponent