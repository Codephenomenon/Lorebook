<template lang="html">
  <div class="auth">
    <div class="auth_panel">
      <div class="auth_panel-head">
        <div class="auth_panel-head--header activePanel" v-on:click="makeActive($event)">
          <h2>Login</h2>
        </div>
        <div class="auth_panel-head--header" v-on:click="makeActive($event)">
          <h2>Register</h2>
        </div>
        <div class="auth_panel-head--exit" v-on:click="displayAuth()">
          <span>
            <svg id="exitIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 100 125">
              <defs>
                <g id="a">
                  <path fill="#000000" stroke="none" d=" M 82.1 22.1 Q 83.0017578125 21.24453125 83 20 83.0017578125 18.75546875 82.1 17.85 81.24453125 16.9982421875 80 17 78.7552734375 16.998046875 77.85 17.85 L 50 45.75 22.1 17.85 Q 21.24453125 16.998046875 20 17 18.75546875 16.9982421875 17.85 17.85 16.9982421875 18.75546875 17 20 16.998046875 21.24453125 17.85 22.1 L 45.75 50 17.85 77.85 Q 16.998046875 78.7552734375 17 80 16.9982421875 81.24453125 17.85 82.1 18.75546875 83.0017578125 20 83 21.24453125 83.0017578125 22.1 82.1 L 50 54.25 77.85 82.1 Q 78.7552734375 83.0017578125 80 83 81.24453125 83.0017578125 82.1 82.1 83.0017578125 81.24453125 83 80 83.0017578125 78.7552734375 82.1 77.85 L 54.25 50 82.1 22.1 Z"/>
                </g>
              </defs>
              <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <use xlink:href="#a"/>
              </g>
            </svg>
          </span>
        </div>
      </div>
      <div class="auth_panel-login" v-if="display === true">
        <AuthForm type="login"/>
      </div>
      <div class="auth_panel-login" v-if="display === false">
        <AuthForm type="register"/>
      </div>
    </div>
  </div>
</template>

<script>
import AuthForm from './AuthForm.vue';

export default {
  components: {
    AuthForm
  },
  data: function() {
    return {
      display: true
    }
  },
  methods: {
    displayAuth: function() {
      this.$emit('displayAuth');
    },
    makeActive: function(event) {
      let temp = document.querySelector('.activePanel');
      temp.classList.remove('activePanel');
      event.currentTarget.classList.add('activePanel');
      this.display = !this.display
    }
  }
}
</script>

<style lang="scss" scoped>
  .auth {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($dark-gray-1, 0.3);
    @include flex-center(center, flex-start);

    &_panel {
      width: 100%;
      height: 100%;
      max-width: 40rem;
      max-height: 40rem;
      background-color: $white;
      margin-top: calc(90vh - 40rem);
      @include box-shadow(0.3rem, 0.3rem, 0.4rem);
      animation: slide-up 0.3s ease-out;

      &-head {
        width: 100%;
        height: 5rem;
        position: relative;
        z-index: 5;
        background-color: lighten($secondary, 5%);
        @include flex-center(space-between);

        &--header {
          @include flex-center;
          margin: 1rem 0.2rem 0rem 0rem;
          padding: 0rem 1.5rem 0rem 1.5rem;
          font-size: 1rem;

          &:first-child {
            margin-left: 0.5rem;
          }

          & h2 {
            color: $light-gray-2;
            font-weight: 500;
            text-shadow: 0.1rem 0.1rem 0.1rem rgba($black, 0.3);
            cursor: pointer;
          }
        }

        &--exit {
          flex: 1;
          @include flex-center(flex-end);

          & span {
            width: 2rem;
            height: 2rem;
            cursor: pointer;
            background-color: $white;
            margin-right: 1rem;
            border-radius: 50%;
            @include flex-center;
            transition: all 0.2s ease-in;

            & svg {
              width: 1.5rem;
              height: 1.5rem;
              padding-top: 0.3rem;
              transition: all 0.3s ease;

              &:hover {
                transform: rotate(180deg);
              }
            }

            &:hover {
              @include box-shadow(0.1rem, 0.2rem, 0.2rem);
              transform: scale(1.1);
            }
          }
        }
      }

      &-login {
        position: relative;
        background-color: $white;
        z-index: 10;
        width: 100%;
        height: 100%;
        max-height: 35rem;
        flex: 1;
        @include flex-center;
      }
    }
  }

  .activePanel {
    background-color: $white;
    align-self: stretch;
    border-radius: 5% 5% 0% 0%;
    @include box-shadow;

    & h2 {
      color: #737373;
      font-weight: 500;
      text-shadow: none;
    }
  }
</style>
