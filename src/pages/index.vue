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
import Category from '@/components/Category.vue';

const GET_CATEGORIES = `
  query GetCategories {
    allCategories {
      name
      priceFrom
      image {
        publicUrl
      }
    }
  }
`;

function graphql(query, variables = {}) {
  return fetch('http://localhost:3000/admin/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      variables,
      query,
    }),
  }).then(function(result) {
    return result.json();
  });
}

export default {
  name: 'Home',
  transition: 'fade',
  components: { Category },
  async asyncData() {
    const { data } = await graphql(GET_CATEGORIES);
    return {
      categories: data.allCategories,
    };
  }
};
</script>
