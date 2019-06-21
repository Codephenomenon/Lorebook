<template lang="html">
  <div class="userControl">
    <img class="userControl_logo" src="../../assets/lorebook-logo.png" alt="Logo">
    <div class="">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .userControl {
    grid-area: row-start / col-start / row-end / 3;
    background-color: $primary;
    @include box-shadow;
    @include flex-center(center, flex-start);

    &_logo {
      flex: 0 0 15%;
      max-width: 6rem;
      margin: 1rem 0rem 0.5rem 0rem;
    }
  }
</style>
