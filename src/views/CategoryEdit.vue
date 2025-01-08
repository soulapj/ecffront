<template>
    <form @submit.prevent="modifierCategorie">
        <div class="mb-3">
            <label for="titre" class="form-label">Titre</label>
            <input type="text" class="form-control" id="titre" v-model="category.titre">
        </div>
        <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
</template>
<script>
import categories from "@/services/categories.js"
export default {
    data() {
        return {
            category: {
                titre: "",
            },
        }
    },
    methods: {
        modifierCategorie(){
            console.log(this.category)
            categories.updateCategory(this.category)
        },
    },
    mounted() {
        categories.getCategory(this.$route.params.id).then((data) => {
            this.category = data.data;
        })

    }
}
</script>