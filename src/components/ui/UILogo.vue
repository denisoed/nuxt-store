<template>
  <div class="ui-logo" :class="{ 'ui-logo--light': light }">
    <p>Amad</p>
    <span>store</span>
  </div>
</template>

<script>
export default {
  name: 'UILogo',
  props: {
    light: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scope>
  .ui-logo {
    color: #000;

    p {
      font-size: 40px;
      color: inherit;
      margin: 0;
      line-height: normal;

      &::after {
        content: '';
        width: 26px;
        height: 26px;
        display: inline-block;
        background-color: #FBB710;
        border-radius: 100%;
        margin-left: 2px;
      }
    }

    span {
      text-transform: uppercase;
      color: inherit;
      font-size: 14px;
      letter-spacing: 5px;
    }

    &--light {
      color: #fff;
    }
  }
</style>