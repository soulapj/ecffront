<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Titre</th>
                <th scope="col">Date de Parution</th>
                <th scope="col">Description</th>
                <th scope="col">Realisateur</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(movie, index) in movies" :key="index">
                <th scope="row" class="align-middle">{{ movie.id }}</th>
                <td class="align-middle">{{ movie.titre }}</td>
                <td class="align-middle">{{ new Date(movie.dateParution).toLocaleDateString() }}</td>
                <td class="align-middle">{{ movie.description }}</td>
                <td class="align-middle">{{ movie.realisateur }}</td>
                <td>
                    <router-link :to="'/movie/' + movie.id "><button class="btn btn-primary m-1">Details</button></router-link>
                    <router-link :to="'/movie/edit/' + movie.id "><button class="btn btn-primary m-1">Modifier</button></router-link>
                    <button class="btn btn-danger" @click="supprimeMovie(movie.id)">Supprimer</button>
                </td>
            </tr>
        </tbody>
    </table>
    <router-link to="movie/add"><button class="btn btn-primary m-1">Ajouter</button></router-link>
    
</template>
<script>
import movie from "@/services/movies.js"
export default {
    data() {
        return {
            movies: [],
        }
    },
    methods: {
        supprimeMovie(id) {
            movie.deleteMovie(id);
        }

    },
    mounted() {
        movie.getMovies().then((data) => {
            this.movies = data.data;
            console.log(this.movies);
        })
    }
}
</script>