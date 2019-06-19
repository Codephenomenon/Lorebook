<template lang="html">
  <div id="home">
    <Header v-on:changeContent="displayContent($event)" v-on:displayAuth="authPanel()"/>
      <Auth v-if="auth === true" v-on:displayAuth="authPanel()"/>
      <div class="homeContent">
        <!-- Conditionally rendering homepage. -->
        <div class="homeContent_mainContent" v-if="component === 'about'">
          <Card v-for="card in landingCards" v-bind:title="card.title" v-bind:img="card.img" v-bind:content="card.content" />
        </div>
        <!-- Support content. -->
        <div class="homeContent_supportContent" v-if="component === 'support'">
          <div class="supportPanel">
            <h2>wadeoptr</h2>
            <p>awkdmadksmalwda</p>
            <p>dawdnalkdnalwd</p>
            <button type="button" name="button">Donate</button>
          </div>
        </div>
        <!-- Team content. -->
        <div class="homeContent_teamContent" v-if="component === 'team'">
          <div class="teamPanel">
            team content
          </div>
        </div>
        <!-- Sidebar component. -->
        <div class="homeContent_sideBar">
          side content
        </div>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Card from "./components/Card.vue";
import Auth from "./components/Auth.vue";

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Card,
    Auth
  },
  data: function() {
    return {
      component: 'about',
      auth: false,
      landingCards: [
        { title: 'Envision',
          img: `brainIcon`, 
          content: 'wadas jkwa wadamsd; mawdasd.'
        },
        { title: 'Create', img: 'triangle', content: 'wad wam wldawlw oefop eo.' },
        { title: 'Share', img: 'square', content: 'wasdwakj nnu4ionfo oiands.' }
      ]
    }
  },
  methods: {
    displayContent: function(msg) {
      this.component = msg;
    },
    authPanel: function() {
      this.auth = !this.auth;
      console.log(this.auth);
    }
  }
}
</script>

<style lang="scss" scoped>
  #home {
    width: 100%;
    height: auto;
    min-height: 100vh;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 50%;
      top: 50%;
      left: 0;
      background-color: $light-gray-1;
    }
  }

  .homeContent {
    width: 100%;
    height: 100%;
    min-height: $home-height;
    display: flex;
    flex-direction: row;

    &_mainContent, &_supportContent, &_teamContent {
      flex: 0 0 80%;
      z-index: 10;
      @include flex-center(space-around);
    }

    &_sideBar {
      flex: 0 0 20%;
      z-index: 10;
    }
  }

  .supportPanel, .teamPanel {
    width: 100%;
    max-width: 60rem;
    height: 100%;
    max-height: 35rem;
    background-color: $white;
    @include box-shadow;
    animation: pop-in 1s ease;
  }
</style>
