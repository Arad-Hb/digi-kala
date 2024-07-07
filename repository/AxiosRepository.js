import axios from "axios"
import SERVER from '../config/myConfig.json'

export const GET =(url)=>{
return axios.get(`${SERVER.Address1}${url}`)
} 
export const POST = (url, body) => {

    return axios.post(`${SERVER.Address1}${url}`
        , body
        , {
            headers: {
                
                'Content-Type': 'application/json',
                'scheme': 'http',
            }
           }
    )
}