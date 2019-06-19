<template lang="html">
  <div class="communityPanel">
    <div class="communityPanel_blog">
        <!-- <Card v-for="card in landingCards" v-bind:title="card.title" v-bind:img="card.img" v-bind:content="card.content" /> -->
        <ul class="communityPanel_blog-list">
          <li class="communityPanel_blog-list--item"  v-for="post in blogs">
            <div class="communityPanel_blog-list--item_icon">

            </div>
            <div class="communityPanel_blog-list--item_content">
              <h3>{{ post.title }}</h3> by: <em>{{ post.author }}</em><br/>
              <p>{{ post.desc }}</p>
            </div>
          </li>
        </ul>
    </div>
    <div class="communityPanel_board">
      adasd
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      blogs: [
        { title: 'Test', author: 'Cool Guy', desc: 'This is an example blog post. Click me to find out more.'},
        { title: 'Welcome to Lorebook', author: 'Another Dev', desc: 'Were working hard on this application my dudes.'},
        { title: 'Wowza', author: 'Memelord', desc: 'Get ready to tip your fedoras and puff ya vapes.'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .communityPanel {
    width: 100%;
    max-width: 80rem;
    height: 100%;
    min-height: 40rem;
    background-color: $primary-dark;
    @include box-shadow(0.2rem, 0.3rem, 0.4rem);
    @include flex-center;
    flex-direction: row;

    &_blog {
      flex: 0 0 40%;
      min-height: 100%;
      align-self: stretch;

      &-list {
        width: 100%;
        height: 100%;
        padding: 0;
        list-style: none;
        @include flex-center(flex-start);
        flex-direction: column;

        &--item {
          color: $dark-gray-2;
          width: 100%;
          max-width: 25rem;
          background-color: $white;
          padding: 0rem 0.5rem;
          margin: 0rem 0.5rem 0.5rem 1rem;
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
        }
      }
    }

    &_board {
      flex: 0 0 60%;
      min-height: 100%;
      background-color: $light-gray-2;
      align-self: stretch;
    }
  }
</style>
