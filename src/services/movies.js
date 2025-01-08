import axios from 'axios';
const url = "http://localhost:8000/movies"

export default{
    getMovies(){
        return axios.get(url);
    },
    getMovie(id){
        return axios.get(`${url}/${id}`)
    },
    addMovie(movie){
        return axios.put(`${url}/add`, movie)
    },
    updateMovie(id, movie){
        return axios.put(`${url}/${id}`, movie)
    },
    deleteMovie(id){
        return axios.delete(`${url}/${id}`)
    },
}