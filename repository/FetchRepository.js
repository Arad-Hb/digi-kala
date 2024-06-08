import SERVER from '../config/myConfig.json'

export const GET =(url)=>{
return fetch(`${SERVER.Address1}${url}`)
}
export const POST = async (url, body) => {
    try {
        const response = await fetch(`${SERVER.Address1}${url}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body,
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}