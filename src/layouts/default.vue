<template>
  <main>
    <Search />
    <div class="main-content-wrapper d-flex clearfix">
      <NavigationMenu />
      <Nuxt />
    </div>
    <NewsLetter />
    <Footer />
  </main>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu';
import Footer from '@/components/Footer.vue';
import NewsLetter from '@/components/NewsLetter.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'Default',
  components: { NavigationMenu, Footer, NewsLetter, Search },
}
</script>
