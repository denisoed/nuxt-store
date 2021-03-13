<template>
  <!-- Product Catagories Area Start -->
  <div class="products-catagories-area clearfix">
    <div class="amado-pro-catagory clearfix">

      <!-- Single Catagory -->
      <div
        v-for="(category, i) of categories"
        :key="i"
        class="single-products-catagory clearfix"
      >
        <a href="shop.html">
          <img :src="category.image.publicUrl" :alt="category.name">
          <!-- Hover Content -->
          <div class="hover-content">
            <div class="line"></div>
            <p>From {{ category.priceFrom }}</p>
            <h4>{{ category.name }}</h4>
          </div>
        </a>
      </div>
    </div>
  </div>
  <!-- Product Catagories Area End -->
</template>

<script>
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
    async asyncData() {
      const { data } = await graphql(GET_CATEGORIES);
      return {
        categories: data.allCategories,
      };
    }
  }
</script>
