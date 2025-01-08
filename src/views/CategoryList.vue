<template>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Titre</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(category, index) in categories" :key="index">
                <th scope="row" class="align-middle">{{ category.id }}</th>
                <td class="align-middle">{{ category.titre }}</td>
                <td>
                    <router-link :to="'/category/edit/' + category.id "><button class="btn btn-primary m-1">Modifier</button></router-link>
                    <button class="btn btn-danger" @click="supprimeCateg(category.id)">Supprimer</button>
                </td>
            </tr>
        </tbody>
    </table>
    <router-link to="category/add"><button class="btn btn-primary m-1">Ajouter</button></router-link>
</template>
<script>
import categorie from "@/services/categories.js"
export default {
    data() {
        return {
            categories: [],
        }
    },
    methods: {
        supprimeCateg(id) {
            categorie.deleteCategory(id);
        }

    },
    mounted() {
        categorie.getCategories().then((data) => {
            this.categories = data.data;
            console.log(this.categories);
        })
    }
}
</script>