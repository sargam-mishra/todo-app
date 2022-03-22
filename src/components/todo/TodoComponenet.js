import { useState, useEffect} from "react";
import {Formik, Form, Field, ErrorMessage}  from 'formik';
import TodoService from "../../api/todo/TodoService";
import AuthenticationService from "./AuthenticationService"

const TodoComponent = (props) => {

    let userName =  AuthenticationService.getLoggedInUserName()
    const [data, setData] = useState({id : 0, description : '', targetDate : new Date(), isCompleted : false })

    const onSubmit = (values) => {
         let userName =  AuthenticationService.getLoggedInUserName()
    console.log( " values ",  values)

    if(props.params.id === "-1"){
   
         console.log("new todo to be added")
       
        TodoService.addTodo(userName,{
        id: Math.floor((Math.random() * 10) + 1),
        description: values.description,
        targetDate: values.targetDate,
        done : values.isCompleted, 
        username : userName
        })
    }else {
         TodoService.updateTodo(userName, props.params.id,{
        id : props.params.id , 
        description: values.description,
        targetDate: values.targetDate,
        done : values.isCompleted
    })

    }
     props.navigate(`/todos`);
   }

    useEffect(() => {
        TodoService.getTodoByTodoId( userName ,props.params.id)
        .then(response=>  setData( {id : response.data.id, description : response.data.description, targetDate : response.data.targetDate.toString().split("T")[0], isCompleted : response.data.done })
        )
   }, [])


   let {description, targetDate, isCompleted} =  data

   const validate = (values) => {
       let errors = {}
    if(!values.description) {
        errors.description = "Enter a Description"
    }else if (values.description.length < 5) {
         errors.description = "Enter atleast 5 charaters in Description"
    }

    return errors
   }




return (
<div>  
    <h1> Todo </h1>
    <div className = "container" />
    <Formik
    
    initialValues = {{
       description,
       targetDate,
       isCompleted
    }}
    onSubmit = {onSubmit}
    validate = {validate}
    validateOnChange = {false}
    validateOnBlur = {false}
    enableReinitialize = {true}
    
    
    
    > 
    {
      (props) => (
          <Form>
              <ErrorMessage name = "description" component = "div" className = "alert alert-warning" />
              <fieldset className = "form-group" >
                   <label> Description </label>
                   <Field className = "form-control" type = "text" name = "description" /> 
                   </fieldset>

               <fieldset className = "form-group" >
                   <label> Target Date </label>
                   <Field className = "form-control" type = "date" name = "targetDate" /> 
                   </fieldset>

                   <fieldset className = "form-group" >
                   <label> Is Completed </label>
                   <Field type = "checkbox" name = "isCompleted" /> 
                   </fieldset>
               
                    

                   <button className = "btn btn-success" type = "submit"> Save </button>
          </Form>
      )

    }
    </Formik>

</div>
)
    
   
}

export default TodoComponent;