<template lang="html">
  <div class="card">
    <h1 class="card_title">{{ title }}</h1>
    <object data="" type="image/svg+xml">
      <use xlink:href="~@/assets/icons.svg#brainIcon" />
    </object>
    <p class="card_content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'img',
    'content'
  ]
}
</script>

<style lang="scss" scoped>
  .card {
    flex: 1;
    background-image: $card-background;
    @include box-shadow;
    max-width: 18rem;
    height: 100%;
    max-height: 32rem;
    @include flex-center(flex-start, center);
    flex-direction: column;
    animation: pop-side 1s ease;

    &_title {
      flex: 1;
      padding-top: 1rem;
    }

    &_img {
      flex: 1;
    }

    &_content {
      flex: 4;
    }
  }
</style>
