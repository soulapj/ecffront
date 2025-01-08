<template>
<div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ movies.titre }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ movies.realisateur }}</h6>
        <p class="card-text">{{ movies.description }}</p>
        <a href="#" class="btn btn-primary m-1">Edit</a>
        <a href="#" class="btn btn-danger">Delete</a>
      </div>
    </div>
</div>
<router-link to="/movie"><button class="btn btn-primary m-4">Return</button></router-link>
    
</template>
<script>
import movie from "@/services/movies.js"
export default {
    data() {
        return {
            movies: [],
        }
    },
    mounted() {
        movie.getMovie(this.$route.params.id).then((data) => {
            this.movies = data.data;
            console.log(this.movies);
        })
    }
}
</script>