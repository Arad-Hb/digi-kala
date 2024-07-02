import Cookies from "js-cookie"
import { useSelector } from "react-redux"

export const authentication=()=>{
    const data=useSelector(state=>state.userReducer)
    const jwt=Cookies.get('jwt')
if(jwt===undefined || jwt===null){
    return null
}
else{
    return data.user
}

}