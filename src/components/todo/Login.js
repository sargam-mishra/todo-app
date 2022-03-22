import { useState } from "react";
import AuthenticationService from "./AuthenticationService";
const Login = (props) => {

     const [userNamePassword, setUserNamePassword] = useState({username : '', password : '', loginSuccessfull : false});

    const onChangeEvent = (event) => {
    const updatedValues = { ...userNamePassword , [event.target.name] :  event.target.value}
        setUserNamePassword(updatedValues)
    }


    const onLoginClick = () => {
 
         if(userNamePassword.username === "Sargam" && userNamePassword.password === "sargam") {
            
            AuthenticationService.registerSuccessfullLogin(userNamePassword.username, userNamePassword.password)
            
            const updateLoginStatus = { ...userNamePassword ,  loginSuccessfull :  true}

            setUserNamePassword(updateLoginStatus)
             props.navigate(`/welcome/${userNamePassword.username}`);
         }else {
              const updateLoginStatus = { ...userNamePassword ,  loginSuccessfull :  false}
            
            setUserNamePassword(updateLoginStatus)
         }

        

    }


    return (
        <div> 
            <h1> Login </h1>
            <div className = "container"> 
           User Name : <input type = "text" name = "username" value  = {userNamePassword.username} onChange = {onChangeEvent}/>
           Password : <input type = "text" name = "password"  value = {userNamePassword.password} onChange = {onChangeEvent}/>
           <button onClick = {onLoginClick}> Login </button>
        </div>
        </div>
    )
}

export default Login