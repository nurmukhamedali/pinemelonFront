<template>
  <div>
    <div class="container">
        <div class="row d-flex flex-wrap align-items-center justify-content-center">
            <div class="col-6">
            <h3 class="text-center">
              Add Category
            </h3>
          </div>
        </div>
        <div class="row d-flex flex-wrap  justify-content-center">
            <div class="col-6 text-left">
              <form action="" method="post" class="form ">
                <div class="form-group">
                  <label for="categoryName">Category name</label>
                  <input type="text" class="form-control" id="categoryName" v-model="name">
                </div>
                <div class="form-group">
                  <label for="categoryDesc">Description</label>
                  <textarea type="text" class="form-control" id="categoryDesc" v-model="description" />
                </div>
                <div class="form-group">
                  <label for="categoryIcon">Category Icon</label>
                  <input type="text" class="form-control" id="categoryIcon" v-model="icon">
                </div>
                <div class="form-group">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="categoryStatus" checked v-model="isActive">
                    <label class="form-check-label" for="categoryStatus">Is Active</label>
                  </div>
                </div>
                <div class="form-group d-flex flex-wrap align-items-center justify-content-center">
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-lg btn-primary" @click="saveCategory">Save</button>
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

const axios = require("axios");
const sweetalert = require("sweetalert");

export default {
  data(){
    return {
      name: "",
      description: "",
      icon: "",
      isActive: true
    }
  },
  methods: {
    saveCategory() {
      const newCategory = {
        name: this.name,
        description: this.description,
        icon: this.icon,
        enabled: this.enabled
      };
      console.log(JSON.stringify(newCategory));
      const baseURL = "http://localhost:8081/category"
      console.log(newCategory);
      axios({
        method: "POST",
        url: `${baseURL}`,
        data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          sweetalert({
            text: 'Category added successfully',
            icon: "success"
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
</script>

<style scoped>

</style>