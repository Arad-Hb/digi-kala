import axios from "axios"
import SERVER from '../config/myConfig.json'

export const GET =(url)=>{
return axios.get(`${SERVER.Address1}${url}`)
} 