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
      </div>
      <div class="loreFeed">
        <CommPanel/>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Card from "./components/home/Card.vue";
import Auth from "./components/home/Auth.vue";
import CommPanel from "./components/home/Community.vue";

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Card,
    Auth,
    CommPanel
  },
  data: function() {
    return {
      component: 'about',
      auth: false,
      landingCards: [
        {
          title: 'Envision',
          img: `brainIcon`,
          content: 'Integer luctus velit augue, consectetur volutpat risus mattis non. In ac vehicula nunc. Etiam at est ligula. Donec pretium imperdiet mi ac accumsan. In auctor lacus ipsum, ac finibus nisl consectetur quis. Aliquam accumsan ex libero, placerat tempus urna porttitor vitae. Ut ipsum mauris, pellentesque quis sodales non, dictum vitae turpis. Mauris fringilla nulla et velit volutpat suscipit.'
        },
        {
          title: 'Create',
          img: 'triangle',
          content: 'Ut commodo ac velit a tincidunt. In fermentum, ligula vitae volutpat tincidunt, quam nunc ornare est, vitae tempor arcu urna sed nisl. Duis velit purus, feugiat nec gravida in, tincidunt et lacus. Sed mauris odio, malesuada in dolor eget, interdum elementum erat. Curabitur faucibus dui eu tincidunt malesuada. Fusce eleifend arcu at venenatis tincidunt. Duis pretium auctor velit, nec mollis lorem tristique a. Pellentesque consequat mi urna, sit amet ultricies nisl dictum a. Curabitur malesuada molestie augue maximus mollis.'
        },
        {
          title: 'Share',
          img: 'square',
          content: 'Integer libero libero, accumsan in turpis sed, lacinia facilisis ex. Mauris aliquet, justo quis placerat accumsan, lacus diam interdum dolor, at eleifend nisi nisl ut ipsum. Quisque in nibh at eros tempus maximus ac eu magna. Vestibulum cursus gravida imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum sodales porta.'
        }
      ]
    }
  },
  methods: {
    displayContent: function(msg) {
      this.component = msg;
    },
    authPanel: function() {
      this.auth = !this.auth;
    }
  }
}
</script>

<style lang="scss" scoped>
  #home {
    width: 100%;
    height: auto;
    min-height: 100vh;
  }

  .homeContent {
    width: 100%;
    height: 100%;
    min-height: $mainContent-height;
    display: flex;
    flex-direction: row;
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

    &_mainContent, &_supportContent, &_teamContent {
      flex: 1;
      z-index: 10;
      @include flex-center(space-around);
    }
  }

  .loreFeed {
    width: 100%;
    height: 100%;
    min-height: $commContent-height;
    display: flex;
    flex-direction: row;
    background-image: linear-gradient(lighten($primary, 10%), $primary);
    @include flex-center;
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
