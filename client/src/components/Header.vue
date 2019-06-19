<template lang="html">
  <div class="header">
    <img class="header_logo" src="../assets/lorebook.png" alt="Logo">
    <ul class="header_nav">
      <li class="header_nav-item" v-on:click="changeContent('about')">About</li>
      <li class="header_nav-item" v-on:click="changeContent('support')">Support</li>
      <li class="header_nav-item" v-on:click="changeContent('team')">Team</li>
    </ul>
    <div class="header_btn">
      <span v-on:click="displayAuth()" id="login">Login</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeContent: function(msg) {
      this.$emit('changeContent', msg);
    },
    displayAuth: function() {
      this.$emit('displayAuth');
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: $header-height;
    background-color: $primary;
    @include box-shadow;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &_logo {
      flex: 1;
      max-width: 6rem;
      max-height: 3.8rem;
      margin-top: 0.1rem;
      width: 100%;
      height: auto;
      padding: 0.5rem;
    }

    &_nav {
      flex: 1;
      max-width: 25rem;
      @include flex-center(space-around);
      list-style: none;

      &-item {
        font-size: 1.3rem;
        color: $white;
        font-weight: 500;
        transition: transform 0.3s ease, box-shadow 0.5s ease-out;

        &:hover {
          transform: scale(1.1);
          text-shadow: 0.2rem 0.2rem 0.1rem rgba(0,0,0,0.2);
          cursor: pointer;
        }
      }
    }

    &_btn {
      flex: 1;
      max-width: 6rem;
      @include flex-center;
      background-color: $primary-dark;
      transition: all 0.2s ease;

      &:hover {
        background-color: darken($primary-dark, 15%);
      }

      & span {
        font-size: 1.3rem;
        color: $white;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
</style>
