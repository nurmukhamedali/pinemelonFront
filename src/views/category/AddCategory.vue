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
              <img id="image" class="bd-placeholder-img card-img-top" :src="icon" width="100%" height="225"
                   role="img" />
              <form action="" method="post" class="form" enctype="multipart/form-data">
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
                  <input type="text" name="icon" class="form-control" id="categoryIcon" v-model="icon">
                </div>
                <div class="form-group">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="categoryStatus" checked v-model="enabled">
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

const sweetalert = require("sweetalert");

export default {
  data(){
    return {
      id:'',
      name: '',
      description: '',
      enabled: true,
      icon: '',
    }
  },
  props: ["categoryAttr"],
  mounted() {
    this.id = this.categoryAttr.id,
    this.name = this.categoryAttr.name,
    this.description = this.categoryAttr.description,
    this.enabled = this.categoryAttr.enabled,
    this.icon = this.categoryAttr.icon
  },
  methods: {
    saveCategory() {
      let category = {
        name: this.name,
        description: this.description,
        enabled: this.enabled,
        icon: this.icon,
      };
      let categoryApi = this.$resource("http://localhost:8081/category{/id}")
      if(this.id){
        categoryApi.update({id: this.id}, category)
          .then(() => {
            sweetalert({
              text: 'Category updated successfully',
              icon: "success"
            });
          })
      } else {
        categoryApi.save({}, category)
          .then(() => {
            sweetalert({
              text: 'Category added successfully',
              icon: "success"
            });
          })
      }

    }
  }
}
</script>

<style scoped>

</style>