<template>
  <section class="preloader">
    <div class="lds-circle">
      <span>Amad</span>
      <div></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Preloader'
}
</script>

<style lang="scss" scope>
  .preloader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    z-index: 9999;
  }

  .lds-circle {
    display: flex;
    align-items: center;
    transform: translateZ(1px);

    > div {
      display: inline-block;
      width: 14px;
      height: 14px;
      margin-left: 2px;
      border-radius: 50%;
      background: #fbb710;
      animation: lds-circle 6s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    span {
      line-height: normal;
      font-size: 22px;
    }
  }

  @keyframes lds-circle {
    0%, 100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
</style>
