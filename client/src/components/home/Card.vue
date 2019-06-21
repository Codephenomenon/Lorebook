<template lang="html">
  <div class="container">
    <div class="card">
      <div class="card_front">
        <h1 class="card_front-title">{{ title }}</h1>
        <img v-bind:src="img" alt="icon">
        <p class="card_front-content">{{ content }}</p>
      </div>
      <div class="card_back">
        <h2 class="card_back-title">Example</h2>
        <ul class="card_back-list">
          <li class="card_back-list--item">item 1</li>
          <li class="card_back-list--item">item 2</li>
          <li class="card_back-list--item">item 3</li>
        </ul>
        <p>Sed tortor sapien, rutrum sed nibh sodales, porttitor varius nunc. Phasellus at ligula eu diam interdum finibus. Fusce lacinia justo eget mi viverra, nec congue lectus varius. Praesent eu eros sem. Suspendisse tincidunt mi vel sem condimentum posuere. Donec a augue felis. Morbi ultrices tristique mauris, eget fermentum ipsum semper eu.</p>
      </div>
    </div>
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
  .container {
    perspective: 100rem;
    flex: 1;
    max-width: 20rem;
    height: 100%;
    max-height: 32rem;
    animation: pop-side 1s ease;
  }

  .container:hover .card {
    transform: rotateY(180deg);
    @include box-shadow(-0.2rem, 0.2rem, 0.2rem);
  }

  .card {
    @include box-shadow;
    max-width: 20rem;
    height: 100%;
    max-height: 32rem;
    position: relative;
    transition: all 0.5s ease;
    transform-style: preserve-3d;

    &_front {
      @include flex-center(flex-start, center);
      background-image: $card-background;
      flex-direction: column;
      max-width: 20rem;
      height: 100%;
      max-height: 32rem;
      position: absolute;
      backface-visibility: hidden;
      top: 0;
    	left: 0;

      &-title {
        flex: 1;
        padding-top: 1rem;
      }

      &-img {
        flex: 1;
      }

      &-content {
        flex: 4;
      }
    }

    &_back {
      max-width: 20rem;
      background-image: $card-background;
      height: 100%;
      max-height: 32rem;
      position: absolute;
      backface-visibility: hidden;
      transform: rotateY(180deg);
      top: 0;
    	left: 0;
    }

    &:hover {
      transform: rotateY(180deg);
    }
  }
</style>
