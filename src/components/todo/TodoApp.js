import Login from "./Login"
import WelcomeComponent from './WelcomeComponent';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import { Link } from "react-router-dom"
import AuthenticationService from "./AuthenticationService";
import AuthenticatedRoute from "./AuthenticatedRoute";
import TodoComponent from "./TodoComponenet";

import withNavigation from "./WithNavigation";
import withPararms from "./WithParams";
import ListTodoComponents from "./ListTodosComponent";

const TodoApp =  () => {

const LoginComponentWithNavigation = withNavigation(Login)
const WelcomeComponentWithParams = withPararms(WelcomeComponent)
const HeaderComponenetWithNavigation = withNavigation(HeaderComponent)
const ListTodoComponenetWithNavigation = withNavigation(ListTodoComponents)
const TodoComponenetWithNavigationAndParams = withPararms(withNavigation(TodoComponent))
return (
    <div> 
 <BrowserRouter>
 <HeaderComponenetWithNavigation />
        <Routes> 
            
              <Route path = "/"  element = {<LoginComponentWithNavigation />} /> 
              <Route path = "/login" element = {<LoginComponentWithNavigation />} /> 
              <Route path = "/welcome/:name" element = { <AuthenticatedRoute>  <WelcomeComponentWithParams/> </AuthenticatedRoute> } />  
              <Route path="/todos" element = { <AuthenticatedRoute> <ListTodoComponenetWithNavigation />  </AuthenticatedRoute>} />
              <Route path="*" element = { <ErrorComponent /> } />  
              <Route path="/logout" element = { <AuthenticatedRoute>  <Logout />  </AuthenticatedRoute>} />
              <Route path="/todos/:id" element = { <AuthenticatedRoute>  <TodoComponenetWithNavigationAndParams />  </AuthenticatedRoute>} />   
              

        </Routes> 
              <FooterComponent />

         </BrowserRouter>
        

     
     
     </div>
)

}


const HeaderComponent = () => {
    const isUserLogged = AuthenticationService.isUserLoggedIn()

    return (
<header>
<nav className = "navbar navbar-expand-md navbar-dark bg-dark mb-4 ">

       <div className = "container"> 
           <a href = "/welcome/TODO Management" className="navbar-brand" > TODOApp </a >
           <ul className = "navbar-nav me-auto (start)"> 
              {isUserLogged && <li > <Link className = "nav-link" to = "/welcome/sargam"> Home  </Link> </li>}
               {isUserLogged && <li> <Link className = "nav-link" to = "/todos" > Todos </Link>  </li>}
           </ul>  
       
            <ul className = "navbar-nav navbar-collapse justify-content-end"> 
            { !isUserLogged && <li> <Link  className = "nav-link" to = "/login"> Login  </Link>   </li>}
                {isUserLogged && <li > <Link className = "nav-link" to = "/logout"  onClick = {AuthenticationService.logout}> Logout  </Link>   </li>}
            </ul>  
       
       </div>

</nav>
</header>
    
    )
}


const FooterComponent = () => {
    return (
      <footer className = "footer"> 
      <span className = "text-muted"> All Rights Reserved 2022 @sargam.mishra </span>
      </footer>

    )
}



const Logout = () => {
    return (
        <div>
           <h1> You are logged out  </h1>
           <div className = "container"> Thanks for using our application  </div>
       </div>
    )
}


const ErrorComponent = () => {

    return (
<> Error in loading the page contact support </>

    )

}



export default TodoApp