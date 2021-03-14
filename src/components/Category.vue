<template>
  <div class="single-products-catagory clearfix">
    <router-link :to="link">
      <img :src="imgLink" :alt="name">
      <!-- Hover Content -->
      <div class="hover-content">
        <div class="line"></div>
        <p>From {{ price }}</p>
        <h4>{{ name }}</h4>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    name: {
      type: String,
      default: 'Category name'
    },
    link: {
      type: String,
      default: '/'
    },
    imgLink: {
      type: String,
      default: null
    },
    price: {
      type: String,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
