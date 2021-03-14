<template>
  <div>
    <!-- Mobile Nav (max width 767px)-->
    <div class="mobile-nav">
      <!-- Navbar Brand -->
      <div class="amado-navbar-brand">
        <router-link to="/"><img src="@/assets/img/core-img/logo.png" alt="Logo"></router-link>
      </div>
      <!-- Navbar Toggler -->
      <div class="amado-navbar-toggler">
        <span></span><span></span><span></span>
      </div>
    </div>

    <!-- Header Area Start -->
    <header class="header-area clearfix">
      <!-- Close Icon -->
      <div class="nav-close">
        <i class="fa fa-close" aria-hidden="true"></i>
      </div>
      <!-- Logo -->
      <div class="logo">
        <router-link to="/">
          <UILogo />
        </router-link>
      </div>
      <!-- Amado Nav -->
      <nav class="amado-nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/shop">Shop</router-link></li>
          <li><router-link to="/product">Product</router-link></li>
          <li><router-link to="/cart">Cart</router-link></li>
          <li><router-link to="/checkout">Checkout</router-link></li>
        </ul>
      </nav>
      <!-- Button Group -->
      <div class="amado-btn-group mt-30 mb-100">
        <a href="#" class="btn amado-btn mb-15">%Discount%</a>
        <a href="#" class="btn amado-btn active">New this week</a>
      </div>
      <!-- Cart Menu -->
      <div class="cart-fav-search mb-100">
        <router-link to="/cart" class="cart-nav"><img src="@/assets/img/core-img/cart.png" alt="Carr icon"> Cart
          <span>(0)</span>
        </router-link>
        <a href="#" class="fav-nav"><img src="@/assets/img/core-img/favorites.png" alt=""> Favourite</a>
        <a href="#" class="search-nav"><img src="@/assets/img/core-img/search.png" alt=""> Search</a>
      </div>
      <!-- Social Button -->
      <div class="social-info d-flex justify-content-between">
        <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
      </div>
    </header>
    <!-- Header Area End -->
  </div>
</template>

<script>
import UILogo from '@/components/ui/UILogo.vue';

export default {
  name: 'NavigationMenu',
  components: { UILogo }
}
</script>

<style lang="scss" scoped>
.header-area {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  position: relative;
  z-index: 1;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 320px;
  flex: 0 0 320px;
  width: 320px;
  max-width: 320px;
  background-color: #fff;
  padding: 60px 75px;

  &.bp-xs-on {
    left: 0;
  }

  .nav-close {
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 15px;
    background-color: red;
    text-align: center;
    color: #fff;
    line-height: 40px;
    font-size: 12px;
    cursor: pointer;
    background-color: #fbb710;
    display: none;

    &:hover {
      background-color: #131212;
    }
  }

  .logo {
    margin-bottom: 100px;
    display: block;
  }

  .amado-nav li {
    a {
      font-size: 14px;
      text-transform: uppercase;
      position: relative;
      z-index: 1;
      padding: 20px 0;
      display: block;
      line-height: 0.9;
      color: #131212;
      font-weight: normal;

      &::after {
        -webkit-transition-duration: 500ms;
        transition-duration: 500ms;
        width: 30px;
        height: 3px;
        position: absolute;
        top: 50%;
        margin-top: -1.5px;
        left: -150px;
        background-color: #fbb710;
        z-index: 10;
        content: '';
      }

      &:hover, &:focus {
        color: #fbb710;
      }

      &.nuxt-link-exact-active::after {
        left: -75px;
      }
    }

    &:hover a::after, &:focus a::after {
      left: -75px;
    }
  }

  .amado-btn-group .amado-btn {
    width: 160px;
    display: block;
  }

  .cart-fav-search a {
    display: block;
    text-transform: uppercase;
    font-size: 16px;
    padding: 15px 0;
    color: #131212;
    line-height: 1;

    .search-nav {
      padding-bottom: 0;
    }

    span {
      color: #9e9e9e;
    }

    img {
      margin-right: 10px;
    }

    &:hover, &:focus {
      color: #fbb710;
    }
  }

  .social-info a {
    color: #b5b5b5;
    display: inline-block;

    i {
      font-size: 18px;
    }

    &:hover, &:focus {
      color: #fbb710;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header-area {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 280px;
    flex: 0 0 280px;
    width: 280px;
    max-width: 280px;
    padding: 50px;
  }
}

@media only screen and (max-width: 767px) {
  .header-area {
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 320px;
    flex: 0 0 320px;
    width: 320px;
    max-width: 320px;
    position: fixed;
    z-index: 4000;
    top: 0;
    left: -350px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    display: block;
  }
}

@media only screen and (max-width: 767px) {
  .header-area .nav-close {
    display: block;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header-area .amado-nav li {
    &:hover a::after, &:focus a::after {
      left: -50px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .header-area .amado-nav li a.nuxt-link-exact-active::after {
    left: -50px;
  }
}

@media only screen and (max-width: 767px) {
  .header-area .social-info {
    margin-bottom: 75px;
  }
}
</style>