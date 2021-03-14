<template>
  <div class="shop_sidebar_area">

    <!-- ##### Single Widget ##### -->
    <div class="widget catagory mb-50">
      <!-- Widget Title -->
      <h6 class="widget-title mb-30">Catagories</h6>

      <!--  Catagories  -->
      <div class="catagories-menu">
        <ul>
          <li
            v-for="(category, i) of categories"
            :key="i"
          >
            <a href="#">{{ category.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- ##### Single Widget ##### -->
    <div class="widget brands mb-50">
      <!-- Widget Title -->
      <h6 class="widget-title mb-30">Brands</h6>

      <div class="widget-desc">
        <!-- Single Form Check -->
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="amado">
          <label class="form-check-label" for="amado">Amado</label>
        </div>
        <!-- Single Form Check -->
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="ikea">
          <label class="form-check-label" for="ikea">Ikea</label>
        </div>
        <!-- Single Form Check -->
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="furniture">
          <label class="form-check-label" for="furniture">Furniture Inc</label>
        </div>
        <!-- Single Form Check -->
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="factory">
          <label class="form-check-label" for="factory">The factory</label>
        </div>
        <!-- Single Form Check -->
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="artdeco">
          <label class="form-check-label" for="artdeco">Artdeco</label>
        </div>
      </div>
    </div>

    <!-- ##### Single Widget ##### -->
    <div class="widget color mb-50">
      <!-- Widget Title -->
      <h6 class="widget-title mb-30">Color</h6>

      <div class="widget-desc">
        <ul class="d-flex">
          <li><a href="#" class="color1"></a></li>
          <li><a href="#" class="color2"></a></li>
          <li><a href="#" class="color3"></a></li>
          <li><a href="#" class="color4"></a></li>
          <li><a href="#" class="color5"></a></li>
          <li><a href="#" class="color6"></a></li>
          <li><a href="#" class="color7"></a></li>
          <li><a href="#" class="color8"></a></li>
        </ul>
      </div>
    </div>

    <!-- ##### Single Widget ##### -->
    <div class="widget price mb-50">
      <!-- Widget Title -->
      <h6 class="widget-title mb-30">Price</h6>

      <div class="widget-desc">
        <div class="slider-range">
          <div data-min="10" data-max="1000" data-unit="$"
            class="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
            data-value-min="10" data-value-max="1000" data-label-result="">
            <div class="ui-slider-range ui-widget-header ui-corner-all"></div>
            <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
            <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
          </div>
          <div class="range-price">$10 - $1000</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopFilter',
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.widget {
  position: relative;
  z-index: 1;

  .widget-title {
    font-size: 16px;
    text-transform: capitalize;
    color: #242424;
  }

  .catagories-menu li {
    a {
      text-transform: capitalize;
      font-size: 16px;
      padding: 15px 0 15px 20px;
      display: block;
      font-weight: 400;
      color: #959595;

      &:hover, &:focus {
        color: #fbb710;
      }
    }

    &.active a {
      color: #fbb710;
    }
  }

  &.price {
    .slider-range-price {
      background-color: #c7d2d8 !important;
      height: 2px;
      border: none;
    }

    .ui-slider-handle {
      background-color: #fff;
      top: -7px;
      width: 18px;
      height: 18px;
      margin: 0;
      border: 2px solid #fbb710;
      border-radius: 50%;
    }

    .ui-slider-range.ui-corner-all.ui-widget-header {
      background-color: #fbb710;
    }

    .ui-slider-horizontal {
      height: 2px;
      background-color: #fbb710;
    }

    .range-price {
      font-size: 16px;
      font-weight: 400;
      margin-top: 20px;
      text-transform: uppercase;
      color: #959595;
    }
  }

  &.color .widget-desc ul {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;

    li {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      width: 25%;
      margin-bottom: 15px;

      a {
        width: 30px;
        height: 30px;
        display: block;
        border-radius: 50%;
        background-color: #ffffff;
        position: relative;
        z-index: 1;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);

        &.color1 {
          background-color: #ffffff;
        }

        &.color2 {
          background-color: #969696;
        }

        &.color3 {
          background-color: #030303;
        }

        &.color4 {
          background-color: #0315ff;
        }

        &.color5 {
          background-color: #dc0647;
        }

        &.color6 {
          background-color: #fff56a;
        }

        &.color7 {
          background-color: #f26e51;
        }

        &.color8 {
          background-color: #9a8777;
        }
      }
    }
  }

  &.brands .form-check {
    margin-bottom: 25px;

    label {
      -webkit-transition-duration: 500ms;
      transition-duration: 500ms;
      font-size: 16px;
      color: #959595;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        color: #fbb710;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>