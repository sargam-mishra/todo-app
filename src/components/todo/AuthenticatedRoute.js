import AuthenticationService from "./AuthenticationService"
import {Navigate} from  'react-router-dom'


const AuthenticatedRoute = ({children}) => {

    const userStatus = AuthenticationService.isUserLoggedIn();

        if(userStatus === true) {
         return (
          children
         )
        }else {
     return  (
           <Navigate to = "/login" />
         )
        }
          
}


export default AuthenticatedRoute;