<template>
  <!-- Product Catagories Area Start -->
  <div class="products-catagories-area clearfix">
    <div class="amado-pro-catagory clearfix">

      <!-- Masonry grid -->
      <div
        v-if="categories"
        v-masonry
        transition-duration="0.3s"
        item-selector=".single-products-catagory"
        class="masonry-container"
      >
        <!-- Single Catagory -->
        <Category
          v-masonry-tile
          v-for="(category, i) of categories"
          :key="i"
          :name="category.name"
          link="/shop"
          :imgLink="category.image.publicUrl"
          :price="category.priceFrom"
        />
      </div>
    </div>
  </div>
  <!-- Product Catagories Area End -->
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Category from '@/components/Category.vue';

export default {
  name: 'Home',
  transition: 'fade',
  components: { Category },
  computed: {
    ...mapState('categories', {
      categories: 'list'
    })
  },
  created() {
    this.getCategories();
  },
  methods: {
    ...mapActions('categories', ['getCategories']),
  }
};
</script>
