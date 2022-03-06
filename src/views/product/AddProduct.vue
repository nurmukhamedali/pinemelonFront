<template>
  <div>
    <div class="container">
        <div class="row d-flex flex-wrap align-items-center justify-content-center">
            <div class="col-6">
            <h3 class="text-center">
              Add Product
            </h3>
          </div>
        </div>
        <div class="row d-flex flex-wrap  justify-content-center">
            <div class="col-6 text-left">
              <img id="image" class="bd-placeholder-img card-img-top" :src="image" width="100%" height="225"
                   role="img" />
              <form action="" method="post" class="form" enctype="multipart/form-data">
                <div class="form-group">
                  <label for="productName">Product name</label>
                  <input type="text" class="form-control" id="productName" v-model="name">
                </div>
                <div class="form-group">
                  <label for="productBrand">Product brand</label>
                  <input type="text" class="form-control" id="productBrand" v-model="brand">
                </div>
                <div class="form-group">
                  <label for="productDesc">Description</label>
                  <textarea type="text" class="form-control" id="productDesc" v-model="description" />
                </div>
                <div class="form-group">
                  <label for="productPrice">Price</label>
                  <textarea type="text" class="form-control" id="productPrice" v-model="price" />
                </div>
                <div class="form-group">
                  <label for="productAmount">Amount</label>
                  <textarea type="text" class="form-control" id="productAmount" v-model="amount" />
                </div>
                <div class="form-group">
                  <label for="productIcon">Product Image</label>
                  <input type="text" name="icon" class="form-control" id="productIcon" v-model="image">
                </div>
                <div class="form-group">
                  <select v-model="categoryId">
                    <option v-for="option in categoryOptions" v-bind:key="option.id" :value="option.id" >
                      {{ option.name }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="productStatus" checked v-model="enabled">
                    <label class="form-check-label" for="productStatus">Is Active</label>
                  </div>
                </div>
                <div class="form-group d-flex flex-wrap align-items-center justify-content-center">
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-lg btn-primary" @click="saveProduct">Save</button>
                      <button type="button" class="btn btn-lg btn-light" >Cancel</button>
                    </div>
                </div>
              </form>
            </div>
        </div>
      </div>
  </div>
</template>

<script>

const sweetalert = require("sweetalert");

export default {
  data(){
    return {
      categoryOptions: [],
      id: '',
      name: '',
      brand: '',
      description: '',
      price: '',
      amount: '',
      image: '',
      enabled: true,
      categoryId: '',
    }
  },
  props: ["productAttr"],
  mounted() {
    this.id = this.productAttr.id,
    this.name = this.productAttr.name,
    this.brand = this.productAttr.brand,
    this.description = this.productAttr.description,
    this.price = this.productAttr.price,
    this.amount = this.productAttr.amount,
    this.enabled = this.productAttr.enabled,
    this.image = this.productAttr.image,
    this.categoryId = this.productAttr.categoryId
  },
  created() {
    let categoryApi = this.$resource("http://localhost:8081/category{/id}")
    categoryApi.get().then(result =>
        result.json().then(data =>
            data.forEach(category => this.categoryOptions.push(category))
        )
    )
  },
  methods: {
    saveProduct() {
      let product = {
        name: this.name,
        brand: this.brand,
        description: this.description,
        price: this.price,
        amount: this.amount,
        image: this.image,
        enabled: true,
        categoryId: this.categoryId
      };
      let productApi = this.$resource("http://localhost:8081/product{/id}")
      if (this.id){
        productApi.update({id: this.id}, product)
          .then(() => {
            sweetalert({
              text: "Category updated successfully",
              icon: "success"
            })
          })
      } else {
        productApi.save({}, product)
          .then(() => {
            sweetalert({
              text: 'Category added successfully',
              icon: "success"
            });
          })
      }

    },
  }
}
</script>

<style scoped>

</style>