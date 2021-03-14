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
