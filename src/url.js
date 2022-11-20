export let baseURL= "http://localhost:8000/"

console.log(process.env.NODE_ENV === "production")

if(process.env.NODE_ENV==="production"){
    baseURL = process.env.REACT_BASE_URL
}

export default baseURL