<template lang="html">
  <div class="footer">
    <div class="footer_info">
      Lorebook C 2019<br/>
      <em>all rights reserved.</em>
    </div>
    <div class="footer_nav">
      <ul class="footer_nav-list">
        <li  class="footer_nav-list--item">Terms of Use</li>
        <li  class="footer_nav-list--item">Code of Conduct</li>
        <li  class="footer_nav-list--item">Reporting Abuse</li>
        <li  class="footer_nav-list--item">Privacy policy</li>
      </ul>
    </div>
    <div class="footer_utility">
      <div class="footer_utility-help">
        ?
      </div>
      <div class="footer_utility-diceroller">
        dice roller
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .footer {
    width: 100%;
    height: $footer-height;
    background-color: $dark-gray-1;
    position: relative;
    z-index: 10;
    color: $white;
    @include flex-center(space-around);

    &_info {

    }

    &_nav {
      flex: 1;

      &-list {
        list-style: none;
        @include flex-center;

        &--item {
          font-size: 0.7rem;
          margin: 0rem 0.65rem;
        }
      }
    }
  }
</style>
