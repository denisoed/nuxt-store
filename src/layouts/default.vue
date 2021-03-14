<template>
  <main>
    <transition name="fade">
      <Preloader v-if="dataLoading" />
    </transition>
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
import Preloader from '@/components/Preloader.vue';

export default {
  name: 'Default',
  components: {
    NavigationMenu,
    Footer,
    NewsLetter,
    Search,
    Preloader
  },
  data() {
    return {
      dataLoading: true
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.dataLoading = false;
      }, 500);
    });
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>