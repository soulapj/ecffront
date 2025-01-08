<template>
    <form @submit.prevent="modifierFilm">
        <div class="mb-3">
            <label for="titre" class="form-label">Titre</label>
            <input type="text" class="form-control" id="titre" v-model="movie.titre">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <input type="text" class="form-control" id="description" v-model="movie.description">
        </div>
        <div class="mb-3">
            <label for="dateParution" class="form-label">Date de Parution</label>
            <input type="date" class="form-control" id="dateParution" v-model="movie.dateParution">
        </div>
        <div class="mb-3">
            <label for="realisateur" class="form-label">Realisateur</label>
            <input type="text" class="form-control" id="realisateur" v-model="movie.realisateur">
        </div>
        <div class="mb-3 form-check" v-for="(category, index) in categories" :key="index">
            <label :for="'category_' + category.id" class="form-label"> {{ category.titre }}</label>
            <input type="checkbox" class="form-check-input" :id="'category_' + category.id" :value="category.id" v-model="movie.categories">
        </div>
        <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
</template>
<script>
import movies from "@/services/movies.js"
import category from "@/services/categories.js"
export default {
    data() {
        return {
            movie: {
                titre: "",
                description: "",
                dateParution: "",
                realisateur: "",
                categories: []
            },
            categories: [],
        }
    },
    methods: {
        modifierFilm(){
            console.log(this.movie)
            movies.updateMovie(this.$route.params.id, this.movie)
        },
    },
    mounted() {
        category.getCategories().then((data) => {
            this.categories = data.data;
        })
        movies.getMovie(this.$route.params.id).then((data) => {
            this.movie = data.data;
            console.log(this.movie);
        })
    }
}
</script>