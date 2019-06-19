<template lang="html">
  <div id="user">
    <div class="userPanel">
      <div class="userControl">
        <!-- Creation Controls, logout and settings. -->
        user controls
      </div>
      <div class="userActivity">
        <div class="userActivity_feed">
          <!-- Recent activity, encounters, and entries. -->
          user activity feed
        </div>
      </div>
      <div class="userCodex">
        <div class="userCodex_panel">
          <!-- Links to npcs, locations, items, ect. -->
          user codex
        </div>
      </div>
      <div class="userResources">
        <div class="userResources_panel">
          <!-- API data for supported formats pulled here. -->
          user resources
        </div>
      </div>
      <div class="adSpace">
        <!-- Advertisement placement here. -->
        ad space
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue"

export default {
  name: 'User',
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
  #user {
    width: 100%;
    height: 100%;
    clear: both;
    float: left;
  }

  .userPanel {
    width: 100%;
    height: $user-height;

    // Grid styling for page
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: [col-start] 1fr repeat(10, [col] 1fr) 1fr [col-end];
    grid-template-rows: [row-start] 1fr repeat(10, [row] 1fr) 1fr [row-end];

    // Component styles (will need refactoring).
    .userControl {
      grid-area: row-start / col-start / row-end / 3;
      background-color: $primary;
      @include box-shadow;
    }

    .userActivity {
      grid-area: row-start / 3 / row-end / 7;
      padding: 2rem 1rem 2rem 2rem;
      @include flex-center;

      &_feed {
        @include user-box;
        animation: pop-in 0.4s ease-in;
      }
    }

    .userCodex {
      grid-area: row-start / 7 / 6 / 10;
      padding: 2rem 2rem 1rem 1rem;
      @include flex-center;

      &_panel {
        @include user-box;
        animation: pop-in 0.4s ease-in;
      }
    }

    .userResources {
      grid-area: 6 / 7 / row-end / 10;
      padding: 1rem 2rem 2rem 1rem;

      @include flex-center;

      &_panel {
        @include user-box;
        animation: pop-in 0.4s ease-in;
      }
    }
  }
</style>
