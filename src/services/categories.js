import axios from 'axios';
const url = "http://localhost:8000/categories"

export default{
    getCategories(){
        return axios.get(url);
    },
    getCategory(id){
        return axios.get(`${url}/${id}`)
    },
    addCategory(categ){
        return axios.put(`${url}/add`, categ)
    },
    updateCategory(id, categ){
        return axios.put(`${url}/${id}`, categ)
    },
    deleteCategory(id){
        return axios.delete(`${url}/${id}`)
    },
}