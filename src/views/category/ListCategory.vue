<template>
  <div>
    <div class="container">
      <div class="row d-flex flex-wrap align-items-center justify-content-center">
        <div class="col d-flex justify-content-between">
          <h3 class="text-center">
            Category List
          </h3>
          <router-link :to="{ name: 'Add Category'}">
            <a>
              New Category
            </a>
          </router-link>
        </div>
      </div>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col col-sm-6 col-md-4 col-lg-3 mb-4" v-for="category in categories" :key="category.id">
              <CategoryCard :category="category" :categories="categories"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "@/views/category/CategoryCard";
export default {
  name: 'ListCategory',
  components: {
    CategoryCard
  },
  data(){
    return {
      categories: []
    }
  },
  created(){
    let categoryApi = this.$resource("http://localhost:8081/category{/id}")
    categoryApi.get().then(result =>
        result.json().then(data =>
            data.forEach(category => this.categories.push(category))
        )
    )
  },
  methods: {

  }
}
</script>

<style scoped>

</style>