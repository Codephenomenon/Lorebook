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
  html, body {
      overflow-x: hidden;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
  }

  #app {
    margin: 0;
    padding: 0;
    float: left;
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
