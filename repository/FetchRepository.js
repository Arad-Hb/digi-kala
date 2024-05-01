import SERVER from '../config/myConfig.json'

export const GET =(url)=>{
return fetch(`${SERVER.Address1}${url}`)
}