<template>
    <div class="card shadow-sm">
      <div class="d-flex mt-2 justify-content-center">
        <img class="bd-placeholder-img card-img" :src="category.icon" role="img" alt="Placeholder: Thumbnail">
      </div>
      <div class="card-body">
        <h6 class="card-title d-block text-truncate" style="max-width: 100%;">
          #{{ category.id }} {{ category.name }}
        </h6>
        <small class="card-subtitle mb-2 text-muted d-inline-block text-truncate" style="max-width: 100%;">{{ category.description }}</small>
        <div class="d-flex justify-content-between">
          <div>
            <h3 v-if="category.enabled" class="bi bi-toggle-on"></h3>
            <h3 v-else class="bi bi-toggle-off"></h3>
          </div>
          <div class="btn-group">
            <button class="btn btn-warning btn-sm" type="button" v-on:click="edit">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-danger btn-sm" type="button" v-on:click="del">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: ["category", "categories"],
  methods: {
    del : function (){
      let categoryApi = this.$resource("http://localhost:8081/category{/id}")
      categoryApi.remove({id: this.category.id}).then(result => {
        if(result.ok){
          // **DELETE** from page
          this.categories.splice(
              this.categories.indexOf(this.category), 1
          )
        }
      })
    },
    edit: function (){
      this.$router.push({
        name: "Add Category",
        params: {
          id: this.category.id,
          categoryAttr: this.category
        },
      })
    }
  }
}
</script>

<style scoped>
  .card-img{
    width: auto;
    height: 190px;
    object-fit: cover;
  }
</style>