import axios from 'axios';
const url = "http://localhost:8000/auth"

export default{
    registerUser(user){
        return axios.post(`${url}/register`, user);
    },
    loginUser(user){
        return axios.post(`${url}/login`, user)
    },
}