import { useNavigate } from "react-router";

function withNavigation(Component){
    return props=> <Component {...props} navigate = {useNavigate()} />
}

export default withNavigation