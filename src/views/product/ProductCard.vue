<template>
    <div class="card box-shadow">
      <div class="d-flex mt-2 justify-content-center">
        <span class="badge badge-danger">{{ product.amount }} pcs.</span>
        <img class="bd-placeholder-img card-img-top" :src="product.image" role="img" alt="Placeholder: Thumbnail">
      </div>
      <div class="card-body">
        <h6 class="card-title d-block text-truncate text-left" style="max-width: 100%;">
          #{{ product.id }} {{ product.name }}
        </h6>
        <small class="card-subtitle mb-2 text-muted d-block text-truncate text-left" style="max-width: 100%;">{{ product.description }}</small>
        <div class="d-flex justify-content-between">
          <div>
            <h3 v-if="product.enabled" class="bi bi-toggle-on"></h3>
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
  name: "ProductCard",
  props: ["product", "products"],
  methods: {
    del : function (){
      let productApi = this.$resource("http://localhost:8081/product{/id}")
      productApi.remove({id: this.product.id}).then(result => {
        if(result.ok){
          // **DELETE** from page
          this.products.splice(
              this.products.indexOf(this.product), 1
          )
        }
      })
    },
    edit: function (){
      this.$router.push({
        name: "Add Product",
        params: {
          id: this.product.id,
          productAttr: this.product
        },
      })
    }
  }
}
</script>

<style scoped>
  .card-img-top{
    width: 70%;
    height: auto;
    object-fit: cover;
  }
  .badge{
    position: absolute;
    right: 10px;
    top: 10px;
  }
</style>