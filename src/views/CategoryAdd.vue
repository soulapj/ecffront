<template>
    <form @submit.prevent="ajouterCategorie">
        <div class="mb-3">
            <label for="titre" class="form-label">Titre</label>
            <input type="text" class="form-control" id="titre" v-model="category.titre">
        </div>
        <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
</template>
<script>
import category from "@/services/categories.js"
export default {
    data() {
        return {
            category: {
                titre: "",
            },
        }
    },
    methods: {
        ajouterCategorie(){
            console.log(this.category)
            category.addCategory(this.category)
        },
    },
}
</script>