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
.single-products-catagory {
  position: relative;
  z-index: 1;
  width: 33.33333%;
  top: 0;

  a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 10;

    &::after {
      -webkit-transition-duration: 250ms;
      transition-duration: 250ms;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      content: '';
      background-color: rgba(60, 60, 60, 0.7);
      z-index: 1;
      opacity: 0;
      visibility: visible;
    }

    img {
      width: 100%;
    }
  }

  .hover-content {
    position: absolute;
    top: 40px;
    left: 40px;
    z-index: 10;

    .line {
      width: 80px;
      height: 3px;
      background-color: #fbb710;
      display: block;
      margin-bottom: 15px;
    }

    p {
      font-size: 16px;
      color: #6d6d6d;
      line-height: 1;
      margin-bottom: 5px;
      -webkit-transition-duration: 250ms;
      transition-duration: 250ms;
    }

    h4 {
      margin-bottom: 0;
      -webkit-transition-duration: 250ms;
      transition-duration: 250ms;
    }
  }

  &:hover a::after, &:focus a::after {
    opacity: 1;
    visibility: visible;
  }

  &:hover .hover-content {
    p, h4 {
      color: #fff;
    }
  }

  &:focus .hover-content {
    p, h4 {
      color: #fff;
    }
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .single-products-catagory {
    width: 50%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single-products-catagory {
    width: 100%;
  }
}

@media only screen and (max-width: 767px) {
  .single-products-catagory {
    width: 100%;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  .single-products-catagory {
    width: 50%;
  }
}

@media only screen and (max-width: 767px) {
  .single-products-catagory .hover-content {
    top: 30px;
    left: 30px;
  }
}
</style>
