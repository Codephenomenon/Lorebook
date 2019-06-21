<template lang="html">
  <div class="communityPanel">
    <div class="communityPanel_board">
      <div class="communityPanel_board-goToBlog">
        <h2>Check out our blog for more content!</h2>
        ->
      </div>
      <div class="communityPanel_board-contact">
        <h3>Need to get in touch?</h3>
        email
      </div>
    </div>
    <div class="communityPanel_blog">
        <!-- <Card v-for="card in landingCards" v-bind:title="card.title" v-bind:img="card.img" v-bind:content="card.content" /> -->
        <ul class="communityPanel_blog-list" v-on:mousedown="mouseClickDown($event)" v-on:mouseup="mouseClickUp($event)" v-on:mousemove="mouseDrag($event)" v-on:mouseleave="mouseStop($event)">
          <li class="communityPanel_blog-list--item"  v-for="post in blogs">
            <div class="communityPanel_blog-list--item_icon">

            </div>
            <div class="communityPanel_blog-list--item_content">
              <h3>{{ post.title }}</h3> by: <em>{{ post.author }}</em>
              <p>{{ post.desc }}</p>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      mouseActive: false,
      startY: 0,
      scrollTop: 0,
      blogs: [
        { title: 'Test', author: 'Cool Guy', desc: 'This is an example blog post. Click me to find out more. Here is some more content. Were trying really hard to make this flow over the div right now.'},
        { title: 'Welcome to Lorebook', author: 'Another Dev', desc: 'Were working hard on this application my dudes.'},
        { title: 'Wowza', author: 'Memelord', desc: 'Get ready to tip your fedoras and puff ya vapes.'},
        { title: 'Yo Yiggidy', author: 'Another Dev', desc: 'This post is an intellectual insight into why eels produce electricity.'},
        { title: 'Wowza', author: 'Memelord', desc: 'Get ready to tip your fedoras and puff ya vapes.'},
        { title: 'Wowza', author: 'Memelord', desc: 'Get ready to tip your fedoras and puff ya vapes.'},
        { title: 'Wowza', author: 'Memelord', desc: 'Get ready to tip your fedoras and puff ya vapes.'},
        { title: 'Wowza', author: 'Memelord', desc: 'Get ready to tip your fedoras and puff ya vapes.'},
        { title: 'Wowza', author: 'Memelord', desc: 'Get ready to tip your fedoras and puff ya vapes.'},
        { title: 'Wowza', author: 'Memelord', desc: 'Get ready to tip your fedoras and puff ya vapes.'}
      ]
    }
  },
  methods: {
    mouseClickDown: function(event) {
      this.mouseActive = true;
      event.currentTarget.classList.add('activePanel');
      this.startY = event.pageY - event.currentTarget.offsetTop;
      this.scrollTop = event.currentTarget.scrollTop;
    },
    mouseClickUp: function(event) {
      this.mouseActive = false;
      event.currentTarget.classList.remove('activePanel');
    },
    mouseDrag: function(event) {
      if(!this.mouseActive) return;
      event.preventDefault();
      let posY = event.pageY - event.currentTarget.offsetTop;
      let mover = (event.pageY - this.startY) * 2;
      event.currentTarget.scrollTop = (this.scrollTop - mover);
    },
    mouseStop: function(event) {
      this.mouseActive = false;
      event.currentTarget.classList.remove('activePanel');
    }
  }
}
</script>

<style lang="scss" scoped>
  .communityPanel {
    width: 100%;
    max-width: 80rem;
    height: 40rem;
    background-color: lighten($light-gray-1, 8%);
    @include box-shadow(0.2rem, 0.3rem, 0.4rem);
    @include flex-center;
    flex-direction: row;

    &_blog {
      flex: 0 0 60%;
      min-height: 100%;
      align-self: stretch;
      overflow: hidden;
      position: relative;

      &:after {
        position: absolute;
        content: '';
        z-index: 10;
        width: 120%;
        height: 4rem;
        bottom: 0;
        left: -10%;
        box-shadow: inset -0.02rem -2.5rem 1.5rem rgba(0,0,0,0.2);
      }

      &-list {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        @include flex-center(flex-start);
        flex-direction: column;
        overflow-y: scroll;
        right: -1rem;
        top: 0.5rem;
        padding-right: 1rem;
        position: absolute;

        &::-webkit-scrollbar {
          width: 0 !important;
        }

        &--item {
          color: $dark-gray-2;
          width: 100%;
          max-width: 30rem;
          min-height: 8rem;
          background-color: $white;
          padding: 0rem 0.5rem;
          margin: 0.5rem;
          @include box-shadow;
          @include flex-center(flex-start);
          flex-direction: row;

          &_icon {
            // ICONS WILL GO HERE
            width: 4rem;
            height: 4rem;
            background-color: $secondary;
            border-radius: 50%;
            margin-right: 1rem;
          }

          &_content {
            width: 100%;
            margin-right: 1rem;
          }
        }
      }
    }

    &_board {
      flex: 0 0 40%;
      min-height: 100%;
      background-color: $primary;
      align-self: stretch;
    }

    .activePanel {
      cursor: grabbing;
    }
  }
</style>
