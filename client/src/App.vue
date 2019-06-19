<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
  html {
      overflow: hidden;
  }

  body {
    margin: 0;
    padding: 0;
  }

  #app {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: inline-block;

    width: 100vw;
    height: 100vh;
    font-size: 62.5%;
    font-family: "Rubik", sans-serif;

    background-color: $white;
    background-size: cover;
    background-position: top center;
  }
</style>
