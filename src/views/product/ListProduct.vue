<template>
  <div>
    <div class="container">
      <div class="row d-flex flex-wrap align-items-center justify-content-center">
        <div class="col d-flex justify-content-between">
          <h3 class="text-center">
            Product List
          </h3>
          <router-link :to="{ name: 'Add Product'}">
            <a>
              New Product
            </a>
          </router-link>
        </div>
      </div>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col col-sm-6 col-md-4 col-lg-3 mb-4" v-for="product in products" :key="product.id">
              <ProductCard :product="product" :products="products"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/views/product/ProductCard";
export default {
  name: 'ListCategory',
  components: {
    ProductCard
  },
  data(){
    return {
      products: []
    }
  },
  created(){
    let productApi = this.$resource("http://localhost:8081/product{/id}")
    productApi.get().then(result =>
        result.json().then(data =>
            data.forEach(product => this.products.push(product))
        )
    )
  },
  methods: {

  }
}
</script>

<style scoped>

</style>